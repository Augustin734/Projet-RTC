import React, { useState } from "react";
import "../style/inscription.css"; 

const Inscription = () => {
  const [view, setView] = useState("login"); 

  return (
    <div className="box">
      <div className="login">
        <div className="loginBx">
          {view === "login" && (
            <>
              <h2><i className="fa-solid fa-right-to-bracket"></i> Login</h2>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Sign in" />
              <div className="group">
                <a href="#" onClick={() => setView("forgot")}>Forgot Password</a>
                <a href="#" onClick={() => setView("signup")}>Sign up</a>
              </div>
            </>
          )}

          {view === "signup" && (
            <>
              <h2><i className="fa-solid fa-user-plus"></i> Sign Up</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="submit" value="Sign Up" />
              <div className="group">
                <a href="#" onClick={() => setView("login")}>Login</a>
              </div>
            </>
          )}

          {view === "forgot" && (
            <>
              <h2><i className="fa-solid fa-key"></i> Forgot Password</h2>
              <input type="email" placeholder="Enter your email" />
              <input type="submit" value="Reset Password" />
              <div className="group">
                <a href="#" onClick={() => setView("login")}>Login</a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inscription;
