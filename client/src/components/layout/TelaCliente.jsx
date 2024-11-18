import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png';
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CalculoFrete from '../pages/CalculoFrete';
import { useNavigate } from "react-router-dom";
import '../../styles/Tela.css';
import axios from 'axios'; // Importar Axios para fazer a requisição

function TelaCliente() {
  const [clienteNome, setClienteNome] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o token está presente no localStorage
    const token = localStorage.getItem('token');

    // Função para buscar os dados do cliente usando o token
    const fetchClienteData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cliente-dados', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const { nome } = response.data;
        setClienteNome(nome);
      } catch (error) {
        console.error('Erro ao buscar dados do cliente: ', error);
        // Redirecionar para a tela de login caso o token seja inválido ou erro na requisição
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    if (token) {
      fetchClienteData(); // Busca os dados do cliente se o token estiver presente
    } else {
      // Redirecionar para o login caso o token não esteja presente
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remover o token e redirecionar para a tela de login
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      {/* Barra superior de navegação */}
      <Navbar bg="danger" variant="dark" />

      {/* Barra de navegação principal */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={logo} alt="Logo" height="50" />
          <Nav className="me-auto">
            <Nav.Link href="/cliente">Calcular Frete</Nav.Link>
            <Nav.Link href="/solicitacao-frete">Solicitação de Frete</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center text-white">
            <span className="me-3">Olá, {clienteNome}</span>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </Container>
      </Navbar>

      <CalculoFrete />
    </div>
  );
}

export default TelaCliente;
