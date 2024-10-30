// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação
import './Login.css';
import adminImg from '../../assets/img/administrador.png';
import clienteImg from '../../assets/img/cliente.png';
import motoboyImg from '../../assets/img/motoboy.png';

const Login = () => {
  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleAdminLogin = () => {
    navigate("/login-usuario"); // Redireciona para a tela do Administrador
  };

  const handleClientLogin = () => {
    navigate("/login-usuario"); // Redireciona para a tela do Cliente
  };

  const handleMotoboyLogin = () => {
    navigate("/login-usuario"); // Redireciona para a tela do Motoboy
  };

  return (
    <div className="login-container">
      <h4 className= "estilo" style={{ color: 'white' }}>Escolha o Tipo de Login</h4>
      <div className="button-group">
        
        {/* Botão para login de Administrador */}
        <div className="login-option">
          <img src={adminImg} alt="Administrador" className="login-icon" />
          <button className="login-button" onClick={handleAdminLogin}>
            Administrador
          </button>
        </div>

        {/* Botão para login de Cliente */}
        <div className="login-option">
          <img src={clienteImg} alt="Cliente" className="login-icon" />
          <button className="login-button" onClick={handleClientLogin}>
            Cliente
          </button>
        </div>

        {/* Botão para login de Motoboy */}
        <div className="login-option">
          <img src={motoboyImg} alt="Motoboy" className="login-icon" />
          <button className="login-button" onClick={handleMotoboyLogin}>
            Motoboy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;