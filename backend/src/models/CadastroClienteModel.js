import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function createUser(user) {
  const conexao = mysql.createPool(db);
  const sql = `INSERT INTO users (nome, sobrenome, cpf, telefone, dataNascimento, cep, rua, numero, bairro, cidade, estado, email, senha, role) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    user.nome,
    user.sobrenome,
    user.cpf,
    user.telefone,
    user.dataNascimento,
    user.cep,
    user.rua,
    user.numero,
    user.bairro,
    user.cidade,
    user.estado,
    user.email,
    user.senha,
    user.role
  ];

  try {
    const [result] = await conexao.query(sql, params);
    return [201, { message: 'Usuário criado com sucesso', userId: result.insertId }];
  } catch (error) {
    return [500, error];
  }
}
