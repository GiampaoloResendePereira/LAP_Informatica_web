import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import React from 'react';
import GerenciamentoEntrega from '../pages/GerenciamentoEntrega';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext'; // Importa o contexto de autenticação

const TelaAdministrador = () => {
  const { isAuthenticated, logout } = useAuth(); // Obtém o estado de autenticação
  const navigate = useNavigate();

  // Se o usuário não estiver autenticado, redireciona para a tela de login
  if (!isAuthenticated) {
    navigate('/login'); // Redireciona para a tela de login
    return null; // Retorna null para evitar o render do componente
  }

  // Função de logout
  const handleLogout = () => {
    logout(); // Chama a função logout do contexto
    navigate('/login'); // Redireciona para a tela de login após logout
  };

  return (
    <div>
      {/* Barra superior de navegação */}
      <Navbar bg="danger" variant="dark"></Navbar>

      {/* Barra de navegação principal */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={logo} alt="Logo" height="50" />
          <Nav className="me-auto">
            {/* Link para editar parâmetros de frete */}
            <Nav.Link href="/editar-parametro">Editar Parametro de Frete</Nav.Link>
            <div className="align-right">
              {/* Botão de logout */}
              <button className="sair-button" onClick={handleLogout}>
                Sair
              </button>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/* Componente de gerenciamento de entrega */}
      <GerenciamentoEntrega />
    </div>
  );
};

export default TelaAdministrador;
