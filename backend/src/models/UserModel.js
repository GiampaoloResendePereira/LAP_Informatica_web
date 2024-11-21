import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function getUserByEmail(email) {
  const conexao = mysql.createPool(db);
  const sql = 'SELECT * FROM users WHERE email = ?';
  const params = [email];

  try {
    const [rows] = await conexao.query(sql, params);
    if (rows.length < 1) return null;
    return rows[0];
  } catch (error) {
    throw new Error(error);
  }
}

export async function createUser(user) {
  const conexao = mysql.createPool(db);
  const sql = 'INSERT INTO users (email, senha, nome, role) VALUES (?, ?, ?, ?)';
  const params = [user.email, user.senha, user.nome, user.role];

  try {
    const [result] = await conexao.query(sql, params);
    return [201, { message: 'Usuário criado com sucesso', userId: result.insertId }];
  } catch (error) {
    return [500, error];
  }
}
