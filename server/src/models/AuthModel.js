import conexao from '../conexao.js';

export const verificarUsuario = async (email, senha) => {
  const [rows] = await conexao.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);
  return rows[0];
};
