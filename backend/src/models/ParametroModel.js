import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function getParametro(id) {
  const conexao = mysql.createPool(db);
  const sql = 'SELECT * FROM parametros WHERE id = ?';
  const params = [id];

  try {
    const [rows] = await conexao.query(sql, params);
    return rows.length === 0 ? [404, { message: 'Parâmetro não encontrado' }] : [200, rows[0]];
  } catch (error) {
    return [500, error];
  }
}

export async function updateParametro(id, limite, valor, tipo) {
  const conexao = mysql.createPool(db);
  const sql = 'UPDATE parametros SET limite = ?, valor = ?, tipo = ? WHERE id = ?';
  const params = [limite, valor, tipo, id];

  try {
    const [result] = await conexao.query(sql, params);
    return result.affectedRows === 0 ? [404, { message: 'Parâmetro não encontrado' }] : [200, { message: 'Parâmetro atualizado' }];
  } catch (error) {
    return [500, error];
  }
}
