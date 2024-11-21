import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import CadastroCliente from './components/login/CadastroCliente';
import RecuperacaoSenha from './components/login/RecuperacaoSenha';
import TelaAdministrador from './components/administrador/TelaAdministrador';
import GerenciamentoEntrega from './components/administrador/GerenciamentoEntrega';
import EditarParametro from './components/administrador/EditarParametro';
import TelaCliente from './components/cliente/TelaCliente';
import CalculoFrete from './components/cliente/CalculoFrete';
import SolicitacaoFrete from './components/cliente/SolicitacaoFrete';
import TelaMotoboy from './components/motoboy/TelaMotoboy';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/recuperacao-senha" component={RecuperacaoSenha} />
        <Route path="/cadastro-cliente" component={CadastroCliente} />
        <Route path="/administrador" component={TelaAdministrador} />
        <Route path="/gerenciamento-entrega" component={GerenciamentoEntrega} />
        <Route path="/editar-parametro" component={EditarParametro} />
        <Route path="/cliente" component={TelaCliente} />
        <Route path="/calculo-frete" component={CalculoFrete} />
        <Route path="/solicitacao-frete" component={SolicitacaoFrete} />
        <Route path="/motoboy" component={TelaMotoboy} />
      </Switch>
    </Router>
  );
};

export default App;
