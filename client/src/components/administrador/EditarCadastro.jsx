import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação
import clienteIcon from '../../assets/icon/cliente.png'; // Substitua com o caminho correto da imagem
import motoboyIcon from '../../assets/icon/motoboy.png'; // Substitua com o caminho correto da imagem
import './EditarCadastro.css';

const EditarCadastro = () => {
  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleEditarClienteEditarCadastro = () => {
    navigate("/editar-cadastro-cliente"); // Redireciona para a tela de editar cliente
  };

  const handleEditarMotoboyEditarCadastro = () => {
    navigate("/editar-cadastro-motoboy"); // Redireciona para a tela de editar motoboy
  };

  return (
    <div className="editar-container">
      <h1>Escolha o Tipo de Usuário</h1>
      <div className="button-group">
        {/* Botão para editar cliente */}
        <button className="cliente" onClick={handleEditarClienteEditarCadastro}>
          <img src={clienteIcon} alt="Cliente Icon" className="button-icon" />
          Cliente
          <img src={clienteIcon} alt="Cliente Icon" className="button-icon" />
        </button>

        {/* Botão para editar motoboy */}
        <button className="motoboy" onClick={handleEditarMotoboyEditarCadastro}>
          <img src={motoboyIcon} alt="Motoboy Icon" className="button-icon" />
          Motoboy
          <img src={motoboyIcon} alt="Motoboy Icon" className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default EditarCadastro;
