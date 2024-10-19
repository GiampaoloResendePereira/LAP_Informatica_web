// src/components/TelaInicio.jsx
import React from 'react';
import './TelaInicio.css'; // Importa o CSS para aplicar o estilo
import logo from '../../assets/img/logo.png'; // Caminho ajustado para a logo
import CarrosselPromocoes from './CarrosselPromocoes'; // Importa o componente do carrossel
import 'bootstrap/dist/css/bootstrap.min.css';

const TelaInicio = () => {
  return (
    <div className='inicio-container'>
      {/* Navbar */}
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
                <a className="nav-link" href="simulador-frete">Simulador de Frete</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cadastrar-motoboy">Cadastrar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Carrossel de Promoções */}
      <div className="carrossel-container mt-5 pt-4">
        <CarrosselPromocoes />
      </div>
    </div>
  );
};

export default TelaInicio;