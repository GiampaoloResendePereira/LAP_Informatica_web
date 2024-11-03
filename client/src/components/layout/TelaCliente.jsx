import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Adicione NavDropdown aqui


function TelaCliente(){

  
  return (
    <div>
      {/* Barra superior de navegação */}
      <Navbar bg="danger" variant="dark"></Navbar>

      {/* Barra de navegação principal */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="50" />
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="/solicitacao-transporte">Solicitação de Frete</Nav.Link>
            <Nav.Link href="/Acompanhamento">Acompanhamento do frete</Nav.Link>
            
            <div className="align-right">
          <button className="sair-button">
            Sair
          </button>
        </div>
          </Nav>
        </Container>
      </Navbar>

      
    </div>
  );
};

export default TelaCliente;