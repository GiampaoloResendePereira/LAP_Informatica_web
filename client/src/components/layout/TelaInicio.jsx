import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/img/logo.png';
import '../../styles/TelaInicio.css';

function TelaInicio() {
    
    return (
        <div>
            <Navbar bg="danger" data-bs-theme="danger"></Navbar>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href=""></Navbar.Brand>
          <Nav className="me-auto">
            <img src={logo} alt="Logo" className="login-logo" height="50" />
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastrar-cliente">Cadastrar</Nav.Link>
          </Nav>
          <div className="align-right">
          <Button variant="secondary">Sair</Button>{''}
        </div>
        </Container>
      </Navbar>
        </div>
    );
}

export default TelaInicio;
