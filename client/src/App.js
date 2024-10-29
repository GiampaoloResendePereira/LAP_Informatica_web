import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';


import TelaAdministrador from './components/administrador/TelaAdministrador';
import GerenciamentoEntrega from './components/administrador/GerenciamentoEntrega'; 
import EditarParametro from './components/administrador/EditarParametro';
import Relatorios from './components/administrador/Relatorios';
import CadastroMotoboy from './components/administrador/CadastroMotoboy';


import TelaInicio from './components/inicio/TelaInicio';
import SimuladorFrete from './components/inicio/SimuladorFrete';
import CadastroCliente from './components/inicio/CadastroCliente';


import Acompanhamento from './components/cliente/Acompanhamento';
import HistoricoCliente from './components/cliente/HistoricoCliente';
import SolicitacaoTransporte from './components/cliente/SolicitacaoTransporte';
import TelaCliente from './components/cliente/TelaCliente';


import AceitaCorrridas from './components/motoboy/AceitaCorridas';
import HistoricoMotoboy from './components/motoboy/HistoricoMotoboy';
import NotificacoesMotoboy from './components/motoboy/NotificacoesMotoboy';
import TelaMotoboy from './components/motoboy/TelaMotoboy';


function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas */}
        <Route path="/" element={<TelaInicio />} />
        <Route path="/simulador-frete" element={<SimuladorFrete />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />


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
