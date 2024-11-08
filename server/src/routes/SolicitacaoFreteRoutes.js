// /routes/loginRoutes.js
const express = require('express');
const router = express.Router();
const SolicitacaoFreteControllers = require('../controllers/SolicitacaoFreteControllers');

router.post('/solicitacao-frete', SolicitacaoFreteControllers.cadastroSolicitacao);

module.exports = router;
