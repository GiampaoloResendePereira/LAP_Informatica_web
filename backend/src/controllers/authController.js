import { getUserByEmail } from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { email, senha } = req.body;
  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(400).json({ message: 'Credenciais inválidas' });
  }

  const isMatch = await bcrypt.compare(senha, user.senha);

  if (!isMatch) {
    return res.status(400).json({ message: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token, role: user.role });
}
