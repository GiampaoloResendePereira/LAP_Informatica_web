import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function createCliente(cliente) {
  console.log('CadastroClienteModel: Create');
  const conexao = mysql.createPool(db);
  const sql = `INSERT INTO clientes 
        (nome, sobrenome, cpf, telefone, data_nascimento, cep, rua, numero, bairro, cidade, estado, email, senha)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const params = [
    cliente.nome,
    cliente.sobrenome,
    cliente.cpf,
    cliente.telefone,
    cliente.data_nascimento,
    cliente.cep,
    cliente.rua,
    cliente.numero,
    cliente.bairro,
    cliente.cidade,
    cliente.email,
    cliente.senha
  ];

  try {
    const [retorno] = await conexao.query(sql, params);
    console.log('Cliente Cadastrado');
    return [201, 'Cliente Cadastrado'];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}
