import conexao from '../conexao.js';

export const obterClientePorToken = async (token) => {
  const query = 'SELECT * FROM clientes WHERE token = ?';
  const [rows] = await conexao.query(query, [token]);
  return rows[0];
};
