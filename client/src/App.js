import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TelaAdministrador from './components/layout/TelaAdministrador';
import GerenciamentoEntrega from './components/pages/GerenciamentoEntrega'; 
import EditarParametro from './components/pages/EditarParametro';

import CadastroCliente from './components/pages/CadastroCliente';
import LoginUsuario from './components/pages/LoginUsuario';

import SolicitacaoTransporte from './components/pages/SolicitacaoTransporte';
import TelaCliente from './components/layout/TelaCliente';
import CalculoFrete from './components/pages/CalculoFrete'

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas */}
           
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/" element={<LoginUsuario />} />

        <Route path="/cliente" element={<TelaCliente />} />       
        <Route path="/solicitacao-transporte" element={<SolicitacaoTransporte />} />
        <Route path="/calculo-frete" element={<CalculoFrete />} />

        <Route path="/administrador" element={<TelaAdministrador />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntrega />} />
        <Route path="/editar-parametro" element={<EditarParametro />} />                       
      </Routes>
    </Router>
  );
}

export default App;
