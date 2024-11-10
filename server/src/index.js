//Importando pacote express
import express from 'express';
//Importando cors
import cors from 'cors';


import { cadastrarCliente } from './controllers/CadastroClienteControllers.js';
import { atualizandoParametro } from './controllers/EditarParametroControllers.js';

//Intanciando objeto express
const app = express();
const porta = 5000;

//Configurando comunicação em JSON
app.use(express.json());

//Permitindo acesso do front ao backend atraves do localhost
app.use(cors());

//Rota de teste da API
app.get('/', (req, res) => {
  res.send('API funcionando');
});

//Rotas de CRUD de aulas
app.post('/cadastrar-cliente',cadastrarCliente);
app.put('/editar-parametro/:id',atualizandoParametro);
//app.get('/aulas',mostrandoAulas);
//app.get('/aulas/:id',mostrandoUmaAula);
//app.put('/aulas/:id',atualizandoAula);
//app.delete('/aulas/:id',excluindoAula);

app.listen(porta, () => {
  console.log(`API funcionando na porta ${porta}`);
});