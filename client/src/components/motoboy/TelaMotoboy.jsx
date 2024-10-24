import React, { useState } from 'react'; // Importando useState
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'; 
import '../../'
import { Navbar, Container, Nav } from 'react-bootstrap';
import AceitaCorrridas from '../motoboy/AceitaCorridas';
import HistoricoMotoboy from '../motoboy/HistoricoMotoboy';
import NotificacoesMotoboy from '../motoboy/NotificacoesMotoboy';

const TelaMotoboy = () => {
  // Estado para controlar a tela visível
  const [telaDeMotoboy, setTelaAtiva] = useState('aceita-corridas'); // Inicialmente "motoboy"

  // Função para renderizar a tela ativa
  const rendertelaDeMotoboy = () => {
    switch (telaDeMotoboy) {
      case 'aceita-corridas':
        return <AceitaCorrridas />;
      case 'historico-motoboy':
        return <HistoricoMotoboy />;
      case 'notificacoes-motoboy':
        return <NotificacoesMotoboy />;
      default:
        return <AceitaCorrridas />; // Padrão é Aceita Corrridas
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
              <Nav.Link onClick={() => setTelaAtiva('aceita-corridas')}>
                Aceitar Corridas
              </Nav.Link>
              <Nav.Link onClick={() => setTelaAtiva('historico-motoboy')}>
                Historico
              </Nav.Link>
              <Nav.Link onClick={() => setTelaAtiva('notificacoes-motoboy')}>Notificações</Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        {/* Renderiza a tela ativa com base no estado */}
        {rendertelaDeMotoboy()}
      </div>
    </div>
  );
};

export default TelaMotoboy;
