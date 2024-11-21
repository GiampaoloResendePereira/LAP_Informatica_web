import conexao from '../conexao.js';

export const listarPedidos = async () => {
  const [rows] = await conexao.query('SELECT * FROM pedidos');
  return rows;
};

export const atualizarStatusPedido = async (id, status) => {
  const [result] = await conexao.query('UPDATE pedidos SET status = ? WHERE id = ?', [status, id]);
  return result;
};
