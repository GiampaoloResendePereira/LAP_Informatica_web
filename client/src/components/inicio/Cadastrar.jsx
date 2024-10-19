import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação
import clienteIcon from '../../assets/icon/cliente.png'; // Substitua com o caminho correto da imagem
import motoboyIcon from '../../assets/icon/motoboy.png'; // Substitua com o caminho correto da imagem
import './Cadastrar.css';

const Cadastrar = () => {
  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleCasdastrarCliente = () => {
    navigate("/cadastrar-cliente"); // Redireciona para a tela de editar cliente
  };

  const handleCasdastrarMotoboy = () => {
    navigate("/cadastrar-motoboy"); // Redireciona para a tela de editar motoboy
  };

  return (
    <div className="editar-container">
      <h1>Escolha o Tipo de Cadastro</h1>
      <div className="button-group">
        {/* Botão para cadastrar cliente */}
        <button className="cliente" onClick={handleCasdastrarCliente}>
          <img src={clienteIcon} alt="Cliente Icon" className="button-icon" />
          Cliente
          <img src={clienteIcon} alt="Cliente Icon" className="button-icon" />
        </button>

        {/* Botão para cadastrar motoboy */}
        <button className="motoboy" onClick={handleCasdastrarMotoboy}>
          <img src={motoboyIcon} alt="Motoboy Icon" className="button-icon" />
          Motoboy
          <img src={motoboyIcon} alt="Motoboy Icon" className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default Cadastrar;
