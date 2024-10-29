import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import '../../styles/TelaAdministrador.css';
import React from 'react';
import GerenciamentoEntrega from '../administrador/GerenciamentoEntrega';

const TelaAdministrador = () => {
  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleAdminLogin = () => {
    navigate("/"); // Redireciona para a tela do Administrador
  };

  return (
    <div className="tela-administrador">
      {/* Barra superior de navegação */}
      <header className="navbar-top">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <nav className="navbar-links">
          <Link to="/editar-parametro" className="nav-link">Editar Parâmetro de Frete</Link>
          <Link to="/cadastrar-motoboy" className="nav-link">Cadastrar Motoboy</Link>
        </nav>
        <button className="sair-button" onClick={handleAdminLogin}>Sair</button>
      </header>

      {/* Conteúdo principal */}
      <main>
        <GerenciamentoEntrega />
      </main>
    </div>
  );
};

export default TelaAdministrador;
