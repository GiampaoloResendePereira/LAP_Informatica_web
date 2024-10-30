import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';




import TelaAdministrador from './components/layout/Administrador_layout/TelaAdministrador';
import GerenciamentoEntrega from './components/pages/Administrador_pages/GerenciamentoEntrega'; 
import EditarParametro from './components/pages/Administrador_pages/EditarParametro';
import Relatorios from './components/pages/Administrador_pages/Relatorios';


import TelaInicio from './components/layout/Inicio_layout/TelaInicio';
import CarrosselPromocoes from './components/layout/Inicio_layout/CarrosselPromocoes';
import SimuladorFrete from './components/pages/Inicio_pages/SimuladorFrete';
import CadastroCliente from './components/pages/Inicio_pages/CadastroCliente';
import Login from './components/pages/Inicio_pages/Login';
import LoginUsuario from './components/pages/Inicio_pages/LoginUsuario';


import Acompanhamento from './components/pages/Cliente_pages/Acompanhamento';
import HistoricoCliente from './components/pages/Cliente_pages/HistoricoCliente';
import SolicitacaoTransporte from './components/pages/Cliente_pages/SolicitacaoTransporte';
import TelaCliente from './components/layout/Cliente_layout/TelaCliente';


import AceitaCorrridas from './components/pages/Motoboy_pages/AceitaCorridas';
import HistoricoMotoboy from './components/pages/Motoboy_pages/HistoricoMotoboy';
import NotificacoesMotoboy from './components/pages/Motoboy_pages/NotificacoesMotoboy';
import CadastroMotoboy from './components/pages/Motoboy_pages/CadastroMotoboy';
import TelaMotoboy from './components/layout/Motoboy_layout/TelaMotoboy';



function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas */}
        <Route path="/" element={<TelaInicio />} />
        <Route path="/simulador-frete" element={<SimuladorFrete />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/carrossel" element={<CarrosselPromocoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-usuario" element={<LoginUsuario />} />


        <Route path="/cadastrar-motoboy" element={<CadastroMotoboy />} />       
        <Route path="/Acompanhamento" element={<Acompanhamento />} />
        <Route path="/historico-cliente" element={<HistoricoCliente />} />
        <Route path="/solicitacao-transporte" element={<SolicitacaoTransporte />} />
        <Route path="/cliente" element={<TelaCliente />} />    


        <Route path="/administrador" element={<TelaAdministrador />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntrega />} />
        <Route path="/editar-parametro" element={<EditarParametro />} />               
        <Route path="/relatorios" element={<Relatorios />} />
        


        <Route path="/aceita-corridas" element={<AceitaCorrridas />} />
        <Route path="/historico-motoboy" element={<HistoricoMotoboy />} />
        <Route path="/notificacoes-motoboy" element={<NotificacoesMotoboy />} />
        <Route path="/motoboy" element={<TelaMotoboy />} />
      </Routes>
    </Router>
  );
}

export default App;
