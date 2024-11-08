// /routes/loginRoutes.js
const express = require('express');
const router = express.Router();
const CadastroClienteControllers = require('../controllers/CadastroClienteController');

router.post('/cadastrar-cliente', CadastroClienteControllers.cadastroCliente);

module.exports = router;
