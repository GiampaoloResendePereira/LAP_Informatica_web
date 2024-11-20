import express from 'express';
import cors from 'cors';
import { login } from './controllers/AuthController.js';
import { cadastrarCliente } from './controllers/CadastroClienteController.js';
import { calcularFrete, solicitarFrete } from './controllers/FreteController.js';
import { listarPedidos, atualizarStatus } from './controllers/PedidoController.js';
import { obterParametro, editarParametro } from './controllers/ParametroController.js';
import { obterDadosCliente } from './controllers/ClienteController.js';
import { recuperarSenha } from './controllers/RecuperacaoController.js';

const app = express();
const porta = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.post('/login', login);
app.post('/cadastrar-cliente', cadastrarCliente);
app.post('/calcular-frete', calcularFrete);
app.post('/solicitar-frete', solicitarFrete);
app.get('/api/pedidos', listarPedidos);
app.put('/api/pedidos/:id', atualizarStatus);
app.get('/obter-parametro/:id', obterParametro);
app.put('/editar-parametro', editarParametro);
app.get('/cliente-dados', obterDadosCliente);
app.post('/recuperar-senha', recuperarSenha);

app.listen(porta, () => {
  console.log(`API funcionando na porta ${porta}`);
});
