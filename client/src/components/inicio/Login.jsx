import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação
import adminIcon from '../../assets/icon/admin.png'; // Substitua com o caminho correto da imagem
import clienteIcon from '../../assets/icon/cliente.png'; // Substitua com o caminho correto da imagem
import motoboyIcon from '../../assets/icon/motoboy.png'; // Substitua com o caminho correto da imagem
import './Cadastrar.css';

const Login = () => {
  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleLoginAdministrador = () => {
    navigate("/administrador"); // Redireciona para a tela de editar cliente
  };

  const handleLogincliente = () => {
    navigate("/cliente"); // Redireciona para a tela de editar motoboy
  };

  const handleLoginMotoboy = () => {
    navigate("/motoboy"); // Redireciona para a tela de editar motoboy
  };

  return (
    <div className="editar-container">
      <h1>Escolha o Tipo de Login</h1>
      <div className="button-group">
        {/* Botão para logar administrador */}
        <button className="administrador" onClick={handleLoginAdministrador}>
          <img src={adminIcon} alt="Admin Icon" className="button-icon" />
          Administrador
          <img src={adminIcon} alt="Admin Icon" className="button-icon" />
        </button>

        {/* Botão para logar cliente */}
        <button className="cliente" onClick={handleLogincliente}>
          <img src={clienteIcon} alt="Cliente Icon" className="button-icon" />
          Cliente
          <img src={clienteIcon} alt="Cliente Icon" className="button-icon" />
        </button>

        {/* Botão para logar motoboy */}
        <button className="cliente" onClick={handleLoginMotoboy}>
          <img src={motoboyIcon} alt="Motoboy Icon" className="button-icon" />
          Motoboy
          <img src={motoboyIcon} alt="Motoboy Icon" className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default Login;
