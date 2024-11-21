import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function getDeliveries() {
  const conexao = mysql.createPool(db);
  const sql = 'SELECT * FROM deliveries';

  try {
    const [rows] = await conexao.query(sql);
    return [200, rows];
  } catch (error) {
    return [500, error];
  }
}

export async function updateDeliveryStatus(id, status) {
  const conexao = mysql.createPool(db);
  const sql = 'UPDATE deliveries SET status = ? WHERE id = ?';
  const params = [status, id];

  try {
    const [result] = await conexao.query(sql, params);
    return result.affectedRows === 0 ? [404, { message: 'Entrega não encontrada' }] : [200, { message: 'Status da entrega atualizado' }];
  } catch (error) {
    return [500, error];
  }
}
