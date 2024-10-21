// src/components/TelaInicio.jsx
import React, { Fragment } from 'react';
import '../../global.css'; // Importa o CSS para aplicar o estilo
import logo from '../../assets/img/logo.png'; // Caminho ajustado para a logo
import CarrosselPromocoes from './CarrosselPromocoes'; // Importa o componente do carrossel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Importa o Link para navegação
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const TelaInicio = () => {
  return (
    <Fragment>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
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
                <Link className="nav-link" to="/simulador-frete">Simulador de Frete</Link>
              </li>

              <li className="nav-item">
                <DropdownButton
                  id="dropdown-button-login"
                  variant="dark"
                  title="Login"
                  className="mt-2 me-2"
                  data-bs-theme="dark"
                >
                  <Dropdown.Item as={Link} to="/administrador">Administrador</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/cliente">Cliente</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/motoboy">Motoboy</Dropdown.Item>
                </DropdownButton>
              </li>

              <li className="nav-item">
                <DropdownButton
                  id="dropdown-button-cadastrar"
                  variant="dark"
                  title="Cadastrar"
                  className="mt-2"
                  data-bs-theme="dark"
                >
                  <Dropdown.Item as={Link} to="/cadastrar-cliente">Cliente</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/cadastrar-motoboy">Motoboy</Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carrossel de Promoções */}
      <div className="carrossel-container mt-5 pt-4">
        <CarrosselPromocoes />
      </div>
    </Fragment>
  );
};

export default TelaInicio;
