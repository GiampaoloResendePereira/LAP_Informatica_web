// src/pages/Administrador/TelaAdministrador.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link para navegação
import logo from '../../assets/img/logo.png'; // Caminho ajustado para a logo
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../global.css';
import CarrosselPromocoes from '../inicio/CarrosselPromocoes';

const TelaAdministrador = () => {
  return (
    <div className="admin-container">
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
                <Link className="nav-link" to="/gerenciamento-entregas">Gerenciamento de Entregas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/editar-parametro">Editar Parâmetro de Cálculo de Frete</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/relatorios">Relatórios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/notificacoes-admin">Notificações</Link>
              </li>

              {/* Dropdown para Editar Cadastro */}
              <li className="nav-item dropdown">
                <DropdownButton
                  id="dropdown-button-editar-cadastro"
                  variant="dark"
                  title="Editar Cadastro"
                  data-bs-theme="dark"
                  className="mt-2"
                >
                  <Dropdown.Item as={Link} to="/editar-cadastro-cliente">Cliente</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/editar-cadastro-motoboy">Motoboy</Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal pode ser adicionado aqui */}
      <div className="content mt-5 pt-4">
        {/* Adicione o conteúdo da tela administrador aqui */}
        <h1>Bem-vindo, Administrador!</h1>
        {/* Carrossel de Promoções */}
      <div className="carrossel-container mt-5 pt-4">
        <CarrosselPromocoes />
      </div>
        {/* Outros componentes ou informações podem ser adicionados */}
      </div>
    </div>

    
  );
};

export default TelaAdministrador;
