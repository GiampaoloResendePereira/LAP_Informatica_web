// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Importa o arquivo de conexão com o banco

const app = express();
app.use(bodyParser.json());

// Endpoint de exemplo: Cadastro de cliente
app.post('/clientes', (req, res) => {
  const { nome, cpf, email, telefone, data_nascimento, senha } = req.body;

  const sql = 'INSERT INTO clientes (nome, cpf, email, telefone, data_nascimento, senha) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nome, cpf, email, telefone, data_nascimento, senha], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).json({ error: 'Erro ao cadastrar cliente' });
      return;
    }
    res.status(201).json({ message: 'Cliente cadastrado com sucesso', id: result.insertId });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
