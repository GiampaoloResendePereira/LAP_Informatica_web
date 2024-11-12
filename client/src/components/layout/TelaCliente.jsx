import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Adicione NavDropdown aqui
import CalculoFrete from '../pages/CalculoFrete';
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação


function TelaCliente(){

  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleAdminLogin = () => {
    navigate("/"); // Redireciona para a tela do Administrador
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

          <Nav.Link href="/cliente">Calcular Frete</Nav.Link>
          <Nav.Link href="/solicitacao-frete">Solicitação de Frete</Nav.Link>
          
          <div className="align-right">
          <button className="sair-button" onClick={handleAdminLogin}>
            Sair
          </button>
        </div>
          </Nav>
        </Container>
      </Navbar>

      <CalculoFrete/>

      
    </div>
  );
};

export default TelaCliente;