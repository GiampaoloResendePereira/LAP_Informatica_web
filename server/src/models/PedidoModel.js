import conexao from '../conexao.js';

export const obterPedidos = async () => {
  const [rows] = await conexao.query('SELECT * FROM pedidos');
  return rows;
};

export const atualizarStatusPedido = async (id, status) => {
  const query = 'UPDATE pedidos SET status = ? WHERE id = ?';
  await conexao.query(query, [status, id]);
};
