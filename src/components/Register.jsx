import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Kayıt Ol</h2>
        <div className="form-group">
          <label>Ad Soyad:</label>
          <input type="text" placeholder="Ad Soyad" />
        </div>
        <div className="form-group">
          <label>E-Posta:</label>
          <input type="email" placeholder="E-Posta" />
        </div>
        <div className="form-group">
          <label>Şifre:</label>
          <input type="password" placeholder="Şifre" />
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="link-button">
            Üyeysen Giriş Yap
          </Link>
          <button className="primary-button">Kayıt Ol</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
