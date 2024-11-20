import { enviarEmailRecuperacao } from '../models/RecuperacaoModel.js';

export const recuperarSenha = async (req, res) => {
  try {
    const { email } = req.body;
    // Adicione a lógica para verificar o email e gerar um token de recuperação de senha aqui
    await enviarEmailRecuperacao(email);
    res.status(200).send('Instruções para recuperação de senha enviadas');
  } catch (error) {
    console.error('Erro na recuperação de senha: ', error);
    res.status(500).send('Erro na recuperação de senha');
  }
};
