// src/pages/LoginAdmin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; // Certifique-se de que o caminho para a logo está correto
import '../../styles/global.css'; // Importando o CSS global

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
    <div className="login-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-form card p-4">
        <img src={logo} alt="Logo" className="login-logo mb-3" />
        <h4 className="login-title text-center">Login</h4>
        <Form onSubmit={handleLogin} className="login-inputs">
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="login-input"
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="danger" type="submit" className="mt-4">
              Entrar
            </Button>
            <Button variant="primary" className="mt-4" onClick={() => navigate('/cadastrar-cliente')}>
              Cadastrar
            </Button>
          </div>
        </Form>
        <div className="text-center mt-3">
          <a href="/recuperar-senha" className="text-primary">
            Esqueceu o e-mail ou a senha?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
