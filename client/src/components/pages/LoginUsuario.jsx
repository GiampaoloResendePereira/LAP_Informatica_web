// src/pages/LoginAdmin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from '../../assets/img/logo.png'; // Certifique-se de que o caminho para a logo está correto

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && senha === "admin123") {
      navigate("/administrador");
    } else if (email === "cliente@gmail.com" && senha === "cliente123") {
      navigate("/cliente");
    } else if (email === "motoboy@gmail.com" && senha === "motoboy123") {
      navigate("/motoboy");
    } else {
      alert("Credenciais incorretas para Login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={logo} alt="Logo" className="login-logo" />
        <h4 className="login-title">Login</h4>
        <form onSubmit={handleLogin} className="login-inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="login-input"
          />
          <Button variant="danger" type="submit" className="mt-4">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
