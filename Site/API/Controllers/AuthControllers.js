import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getPeopleByMailService } from "../Models/PeopleModel.js";

export const login = async (req, res) => {
  try {
    const { mail, password } = req.body;

    if (!mail || !password) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    const user = await getPeopleByMailService(mail);

    if (!user) {
      return res.status(401).json({ message: "Utilisateur non trouvé" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    const token = jwt.sign(
      { id: user.id, mail: user.mail },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        mail: user.mail,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
