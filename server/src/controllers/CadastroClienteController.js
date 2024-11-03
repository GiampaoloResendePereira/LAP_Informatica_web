// controllers/CadastroClienteController.js
const Cliente = require("../models/CadastroClienteModel");

const cadastrarCliente = (req, res) => {
  const { cpf, nome, email, telefone, dataNascimento, senha } = req.body;

  const novoCliente = { cpf, nome, email, telefone, dataNascimento, senha };

  Cliente.cadastrarCliente(novoCliente, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Erro ao cadastrar cliente." });
    } else {
      res.status(201).json({ message: "Cliente cadastrado com sucesso!" });
    }
  });
};

module.exports = { cadastrarCliente };
