import conexao from '../conexao.js';

export const inserirCliente = async (cliente) => {
  const query = `
    INSERT INTO clientes (nome, sobrenome, cpf, telefone, dataNascimento, cep, rua, numero, bairro, cidade, estado, email, senha)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    cliente.nome, cliente.sobrenome, cliente.cpf, cliente.telefone,
    cliente.dataNascimento, cliente.cep, cliente.rua, cliente.numero,
    cliente.bairro, cliente.cidade, cliente.estado, cliente.email, cliente.senha
  ];

  await conexao.query(query, values);
};
