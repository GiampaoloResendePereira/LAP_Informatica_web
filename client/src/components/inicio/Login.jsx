// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação

const Login = () => {
  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleAdminLogin = () => {
    navigate("/administrador"); // Redireciona para a tela do Administrador
  };

  const handleClientLogin = () => {
    navigate("/cliente"); // Redireciona para a tela do Cliente
  };

  const handleMotoboyLogin = () => {
    navigate("/motoboy"); // Redireciona para a tela do Motoboy
  };

  return (
    <div className="login-container">
      <h1>Escolha o Tipo de Login</h1>
      <div className="button-group">
        {/* Botão para login de Administrador */}
        <button className="administrador" onClick={handleAdminLogin}>
          Administrador
        </button>

        {/* Botão para login de Cliente */}
        <button className="cliente" onClick={handleClientLogin}>
          Cliente
        </button>

        {/* Botão para login de Motoboy */}
        <button className="motoboy" onClick={handleMotoboyLogin}>
          Motoboy
        </button>
      </div>
    </div>
  );
};

export default Login;