'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../style/signup.css';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    first_name: '',
    phone_number: '',
    mail: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/User", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Connexion réussie !");
        window.location.replace("/jb");
      } else {
        alert("Erreur : " + data.message);
      }
    } catch (error) {
      alert("Erreur de connexion au serveur !");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <Link href="/connexion" className="formation-link back-link">
        Back
      </Link>
      


      <div className="employer-section">
        <h1>Sign Up</h1>
        <label className="fonction-label">Fonction:</label>

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

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      <Link href="/advertisements-board" className="formation-link home-link">
        Back to Home Page
      </Link>
    </div>
  );
}