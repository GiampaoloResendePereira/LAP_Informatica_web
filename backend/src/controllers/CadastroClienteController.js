import { createUser } from '../models/CadastroClienteModel.js';
import bcrypt from 'bcryptjs';

export async function cadastrarCliente(req, res) {
  const { nome, sobrenome, cpf, telefone, dataNascimento, cep, rua, numero, bairro, cidade, estado, email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);

  const cliente = {
    nome,
    sobrenome,
    cpf,
    telefone,
    dataNascimento,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado,
    email,
    senha: hashedPassword,
    role: 'cliente', // Definindo o papel do usuário como 'cliente'
  };

  try {
    const [status, resposta] = await createUser(cliente);
    res.status(status).json(resposta);
  } catch (error) {
    res.status(500).json(error);
  }
}
