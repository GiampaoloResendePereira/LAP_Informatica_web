// server.js
const express = require("express");
const cors = require("cors");
const { calcularFreteHandler } = require("./controllers/CalculoFreteController");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Rota para o cálculo de frete
app.post("/calcular-frete", calcularFreteHandler);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// index.js ou app.js
const express = require("express");
const bodyParser = require("body-parser");
const clienteController = require("./controllers/CadastroClienteController");

const app = express();
app.use(bodyParser.json());

app.post("/api/clientes", clienteController.cadastrarCliente);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
