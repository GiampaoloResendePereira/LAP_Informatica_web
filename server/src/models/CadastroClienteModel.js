// models/CadastroClienteModel.js
const db = require("../config/conexao");

// Função para cadastrar cliente
const cadastrarCliente = (cliente, callback) => {
  const query = `
    INSERT INTO clientes (cpf, nome, email, telefone, data_nascimento, senha)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [cliente.cpf, cliente.nome, cliente.email, cliente.telefone, cliente.dataNascimento, cliente.senha],
    (err, result) => {
      if (err) {
        console.error("Erro ao inserir cliente no banco de dados:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};

module.exports = { cadastrarCliente };
