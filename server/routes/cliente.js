// backend/routes/cliente.js
const express = require('express');
const Cliente = require('../models/Cliente');
const router = express.Router();

// Criar novo cliente
router.post('/', async (req, res) => {
  const { nome, cpf, email, telefone, dataNascimento, senha } = req.body;

  try {
    const novoCliente = new Cliente({ nome, cpf, email, telefone, dataNascimento, senha });
    await novoCliente.save();
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao cadastrar cliente', error);
    res.status(400).json({ message: 'Erro ao cadastrar cliente. Verifique os dados fornecidos.' });
  }
});

// Recuperar cliente por ID
router.get('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    res.json(cliente);
  } catch (error) {
    console.error('Erro ao buscar cliente', error);
    res.status(500).json({ message: 'Erro ao buscar cliente.' });
  }
});

module.exports = router;
