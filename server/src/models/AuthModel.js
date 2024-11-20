import conexao from '../conexao.js';

export const obterUsuarioPorEmailESenha = async (email, senha) => {
  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  const [rows] = await conexao.query(query, [email, senha]);
  return rows[0];
};

export const atualizarTokenUsuario = async (id, token) => {
  const query = 'UPDATE usuarios SET token = ? WHERE id = ?';
  await conexao.query(query, [token, id]);
};
