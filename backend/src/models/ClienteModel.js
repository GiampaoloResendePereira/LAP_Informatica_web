import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function getClienteById(id) {
  const conexao = mysql.createPool(db);
  const sql = 'SELECT nome, sobrenome, cpf, telefone, dataNascimento, cep, rua, numero, bairro, cidade, estado, email FROM users WHERE id = ?';
  const params = [id];

  try {
    const [rows] = await conexao.query(sql, params);
    if (rows.length < 1) return null;
    return rows[0];
  } catch (error) {
    throw new Error(error);
  }
}
