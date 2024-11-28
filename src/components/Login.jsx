import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Giriş Yap</h2>
        <form>
          <div className="form-group">
            <label>E-Posta:</label>
            <input type="email" placeholder="E-posta" required/>
          </div>
          <div className="form-group">
            <label>Şifre:</label>
            <input type="password" placeholder="Şifre" required/>
          </div>
          <div className="auth-buttons">
            <Link to="/register" className="link-button">
              Üye değilsen Hesap Oluştur
            </Link>
            <button type="submit" className="primary-button">
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
