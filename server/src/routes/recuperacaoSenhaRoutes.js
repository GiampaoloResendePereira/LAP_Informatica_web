// /routes/recuperacaoSenhaRoutes.js
const express = require('express');
const router = express.Router();
const recuperacaoSenhaController = require('../controllers/recuperacaoSenhaController');

router.post('/recuperar', recuperacaoSenhaController.recuperar);

module.exports = router;
