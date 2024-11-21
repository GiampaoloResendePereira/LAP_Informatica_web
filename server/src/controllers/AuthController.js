import { verificarUsuario } from '../models/AuthModel.js';
import jwt from 'jsonwebtoken';

const segredo = 'seu_segredo_jwt';

export const login = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await verificarUsuario(email, senha);

  if (usuario) {
    const token = jwt.sign({ id: usuario.id, role: usuario.role }, segredo, { expiresIn: '1h' });
    res.json({ token, role: usuario.role });
  } else {
    res.status(401).send('Credenciais inválidas');
  }
};
