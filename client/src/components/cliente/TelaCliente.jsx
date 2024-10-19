// src/pages/Administrador/TelaAdministrador.jsx
import React from 'react';
import './TelaCliente.css'; // Importa o CSS para aplicar o estilo
import logo from '../../assets/img/logo.png'; // Caminho ajustado para a logo
import 'bootstrap/dist/css/bootstrap.min.css';

const TelaCliente = () => {
  return (
    <div className="cliente-container">
      {/* Navbar com Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* Logo à esquerda */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" height="50" />
          </a>

          {/* Botão para mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links de navegação */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* Alinha os itens à direita */}
              <li className="nav-item">
                <a className="nav-link" href="/gerenciamento-entregas">Solicitação de Entrega</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/editar-parametro">Acompanhamento de Entregas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/editar-cadastro-motoboy">Historico de Compras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/relatorios">Editar Perfil</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TelaCliente;