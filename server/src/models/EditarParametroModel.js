import conexao from '../conexao.js';

export const obterParametroPorId = async (id) => {
  const query = 'SELECT * FROM parametros WHERE id = ?';
  const [rows] = await conexao.query(query, [id]);
  return rows[0];
};

export const atualizarParametro = async (parametro) => {
  const query = `
    UPDATE parametros SET limite = ?, valor = ?, tipo = ?
    WHERE id = ?
  `;
  const values = [parametro.limite, parametro.valor, parametro.tipo, parametro.id];
  await conexao.query(query, values);
};
