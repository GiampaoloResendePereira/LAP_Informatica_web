import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





import TelaAdministrador from './components/layout/TelaAdministrador';
import GerenciamentoEntrega from './components/pages/GerenciamentoEntrega'; 
import EditarParametro from './components/pages/EditarParametro';


import TelaInicio from './components/layout/TelaInicio';
import CadastroCliente from './components/pages/CadastroCliente';
import Login from './components/pages/Login';
import LoginUsuario from './components/pages/LoginUsuario';
import CarrosselPromocoes from './components/layout/CarrosselPromocoes';
import SimuladorFrete from './components/pages/SimuladorFrete';



import Acompanhamento from './components/pages/Acompanhamento';
import SolicitacaoTransporte from './components/pages/SolicitacaoTransporte';
import TelaCliente from './components/layout/TelaCliente';


import AceitaCorridas from './components/pages/AceitaCorridas';
import CadastroMotoboy from './components/pages/CadastroMotoboy';
import TelaMotoboy from './components/layout/TelaMotoboy';



function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas */}
        <Route path="/inicio" element={<TelaInicio />} />
        <Route path="/simulador-frete" element={<SimuladorFrete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar-cliente" element={<CadastroCliente />} />
        <Route path="/" element={<LoginUsuario />} />
        <Route path="/Carrossel" element={< CarrosselPromocoes/>} />


        <Route path="/cliente" element={<TelaCliente />} />
        <Route path="/Acompanhamento" element={<Acompanhamento />} />
        <Route path="/solicitacao-transporte" element={<SolicitacaoTransporte />} />


        <Route path="/administrador" element={<TelaAdministrador />} />
        <Route path="/gerenciamento-entregas" element={<GerenciamentoEntrega />} />
        <Route path="/editar-parametro" element={<EditarParametro />} />  
        
             
        <Route path="/aceita-corridas" element={<AceitaCorridas />} />        
        <Route path="/motoboy" element={<TelaMotoboy />} />
        <Route path="/cadastrar-motoboy" element={<CadastroMotoboy />} />
      </Routes>
    </Router>
  );
}

export default App;
