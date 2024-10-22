import React, { useState } from 'react'; // Importando useState
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import '../../global.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Navbar, Container, Nav } from 'react-bootstrap';
import GerenciamentoEntrega from '../administrador/GerenciamentoEntrega';
import EditarParametro from '../administrador/EditarParametro'; 
import EditarCadastroMotoboy from '../administrador/EditarCadastroMotoboy';
import EditarCadastroCliente from '../administrador/EditarCadastroCliente';
import Relatorios from '../administrador/Relatorios';
import NotificacoesAdmin from '../administrador/NotificacoesAdmin';

const TelaAdministrador = () => {
  // Estado para controlar a tela visível
  const [telaAtiva, setTelaAtiva] = useState('gerenciamento-entregas'); // Inicialmente "Gerenciamento de Entregas"

  // Função para renderizar a tela ativa
  const renderTelaAtiva = () => {
    switch (telaAtiva) {
      case 'gerenciamento-entregas':
        return <GerenciamentoEntrega />;
      case 'editar-parametro':
        return <EditarParametro />;
      case 'relatorios':
        return <Relatorios />;
      case 'notificacoes-admin':
        return <NotificacoesAdmin />;
      case 'editar-cadastro-cliente':
        return <EditarCadastroCliente />;
      case 'editar-cadastro-motoboy':
        return <EditarCadastroMotoboy />;
      default:
        return <GerenciamentoEntrega />; // Padrão é Gerenciamento de Entregas
    }
  };

  return (
    <div>
      <div>
        <Navbar bg="danger" data-bs-theme="danger"></Navbar>
      </div>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" height="50" />
            </Link>
            <Nav className="me-auto">
              {/* Links de navegação com onClick para alterar o estado */}
              <Nav.Link onClick={() => setTelaAtiva('gerenciamento-entregas')}>
                Gerenciamento de Entregas
              </Nav.Link>
              <Nav.Link onClick={() => setTelaAtiva('editar-parametro')}>
                Editar Parâmetro de Cálculo de Frete
              </Nav.Link>
              <Nav.Link onClick={() => setTelaAtiva('relatorios')}>Relatórios</Nav.Link>
              <Nav.Link onClick={() => setTelaAtiva('notificacoes-admin')}>
                Notificações
              </Nav.Link>

              {/* Dropdown para Editar Cadastro */}
              <li className="nav-item dropdown">
                <DropdownButton
                  id="dropdown-button-editar-cadastro"
                  variant="dark"
                  title="Editar Cadastro"
                  data-bs-theme="dark"
                  className="mt-2"
                >
                  <Dropdown.Item onClick={() => setTelaAtiva('editar-cadastro-cliente')}>
                    Cliente
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setTelaAtiva('editar-cadastro-motoboy')}>
                    Motoboy
                  </Dropdown.Item>
                </DropdownButton>
              </li>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        {/* Renderiza a tela ativa com base no estado */}
        {renderTelaAtiva()}
      </div>
    </div>
  );
};

export default TelaAdministrador;
