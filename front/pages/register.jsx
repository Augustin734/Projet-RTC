'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    first_name: '',
    phone_number: '',
    mail: '',
    password: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/login");
      } else {
        alert("Erreur : " + data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Erreur de connexion au serveur !");
    }
  };

  return (
    <div className="signup-container">
      <div className="employer-section">
        <h1>Inscription</h1>

        <form id="formAnnonce" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              id="name" 
              type="text" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="first_name">First-Name:</label>
            <input 
              id="first_name" 
              type="text" 
              value={formData.first_name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone_number">Phone:</label>
            <input 
              id="phone_number" 
              type="text" 
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mail">Email:</label>
            <input 
              id="mail" 
              type="email" 
              value={formData.mail}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              id="password" 
              type="password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit">S'inscrire</button>
        </form>
      </div>

      <a href="/" className="formation-link home-link">Retour à la page d'accueil</a>
    </div>
  );
}