// index.js
const express = require('express');
const bodyParser = require('body-parser');
const clienteRoutes = require('./routes/clienteRoutes');
const loginRoutes = require('./routes/loginRoutes');
const recuperacaoSenhaRoutes = require('./routes/recuperacaoSenhaRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api/clientes', clienteRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/recuperacao', recuperacaoSenhaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
