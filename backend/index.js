import express from 'express';
import cors from 'cors';
import { login } from './controllers/AuthController.js';
import { cadastrarCliente } from './controllers/CadastroClienteController.js';
import { calcularFrete, solicitarFrete } from './controllers/FreteController.js';
import { listarPedidos, atualizarStatusPedido } from './controllers/PedidoController.js';
import { obterParametro, editarParametro } from './controllers/ParametroController.js';
import { obterDadosCliente } from './controllers/ClienteController.js';
import { authenticateToken } from './middleware/authMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const porta = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.post('/login', login);
app.post('/cadastro', cadastrarCliente);
app.post('/calcular-frete', authenticateToken, calcularFrete);
app.post('/solicitar-frete', authenticateToken, solicitarFrete);
app.get('/cliente-dados', authenticateToken, obterDadosCliente);
app.get('/api/pedidos', authenticateToken, listarPedidos);
app.put('/api/pedidos/:id', authenticateToken, atualizarStatusPedido);
app.get('/parametro/:id', authenticateToken, obterParametro);
app.put('/editar-parametro', authenticateToken, editarParametro);

app.listen(porta, () => {
  console.log(`API funcionando na porta ${porta}`);
});
