import { obterUsuarioPorEmailESenha, atualizarTokenUsuario } from '../models/AuthModel.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret';

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await obterUsuarioPorEmailESenha(email, senha);
    
    if (usuario) {
      const token = jwt.sign({ id: usuario.id, role: usuario.role }, JWT_SECRET, { expiresIn: '1h' });
      await atualizarTokenUsuario(usuario.id, token);
      res.json({ token, role: usuario.role });
    } else {
      res.status(401).send('Email ou senha incorretos');
    }
  } catch (error) {
    console.error('Erro na autenticação: ', error);
    res.status(500).send('Erro na autenticação');
  }
};
