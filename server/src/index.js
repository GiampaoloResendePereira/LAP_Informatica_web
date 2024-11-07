import express from 'express';
import cors from 'cors';
import { cadastroCliente } from './controllers/CadastroClienteControllers.js';


const app = express();
const porta = 5000;

app.use(express.json());
app.use(cors());

app.post('/cadastrar-cliente', cadastroCliente); // Rota para cadastrar cliente

app.listen(porta, () => {
  console.log(`API funcionando na porta ${porta}`);
});
