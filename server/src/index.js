import express from 'express';
import cors from 'cors';
import { cadastroCliente } from './controllers/CadastroClienteControllers.js';
import { cadastroSolicitacao } from './controllers/SolicitacaoFreteController.js';

const app = express();
const porta = 5000;

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());
app.use(cors());

// Rotas
app.post('/cadastrar-cliente', cadastroCliente); // Rota para cadastrar cliente
app.post('/solicitacao-frete', cadastroSolicitacao); // Rota para solicitar frete

// Inicialização do servidor
app.listen(porta, () => {
  console.log(`API funcionando na porta ${porta}`);
});
