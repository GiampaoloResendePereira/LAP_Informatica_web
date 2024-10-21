// src/pages/Administrador/TelaMotoboy.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link para navegação
import '../../global.css'; // Importa o CSS para aplicar o estilo
import logo from '../../assets/img/logo.png'; // Caminho ajustado para a logo
import 'bootstrap/dist/css/bootstrap.min.css';

const TelaMotoboy = () => {
  return (
    <div className="motoboy-container">
      {/* Navbar com Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* Logo à esquerda */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="50" />
          </Link>

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
                <Link className="nav-link" to="/gerenciamento-entregas">Aceita Corridas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/notificacoes">Notificações</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/historico-entregas">Histórico de Entregas</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal pode ser adicionado aqui */}
      <div className="content mt-5 pt-4">
        <h1>Bem-vindo à sua área de motoboy!</h1>
        {/* Outros componentes ou informações podem ser adicionados aqui */}
      </div>
    </div>
  );
};

export default TelaMotoboy;
