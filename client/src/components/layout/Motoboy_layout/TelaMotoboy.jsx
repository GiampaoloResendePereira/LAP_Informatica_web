import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação
import AceitaCorridas from '../../pages/Motoboy_pages/AceitaCorridas';
import './TelaMotoboy.css';

function TelaMotoboy() {
  const navigate = useNavigate(); // Hook para navegação entre as rotas

  // Funções de navegação para cada tela
  const handleAdminLogin = () => {
    navigate("/"); // Redireciona para a tela do Administrador
  };

  return (
    <div>
      <Navbar bg="danger" variant="dark"></Navbar>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="50" />
          </Link>
          <Nav className="me-auto">
           
          <div className="ms-auto">
          <button className="sair-button" onClick={handleAdminLogin}>
            Sair
          </button>
        </div>
          </Nav>
        </Container>
      </Navbar>

      <AceitaCorridas/>
      
    </div>
  );
}

export default TelaMotoboy;