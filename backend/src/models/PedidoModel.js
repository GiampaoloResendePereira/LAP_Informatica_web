import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function getPedidos() {
  const conexao = mysql.createPool(db);
  const sql = 'SELECT * FROM pedidos';

  try {
    const [rows] = await conexao.query(sql);
    return [200, rows];
  } catch (error) {
    return [500, error];
  }
}

export async function updatePedidoStatus(id, status) {
  const conexao = mysql.createPool(db);
  const sql = 'UPDATE pedidos SET status = ? WHERE id = ?';
  const params = [status, id];

  try {
    const [result] = await conexao.query(sql, params);
    return result.affectedRows === 0 ? [404, { message: 'Pedido não encontrado' }] : [200, { message: 'Status do pedido atualizado' }];
  } catch (error) {
    return [500, error];
  }
}
