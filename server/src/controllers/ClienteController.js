import { obterClientePorToken } from '../models/ClienteModel.js';

export const obterDadosCliente = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const cliente = await obterClientePorToken(token);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  } catch (error) {
    console.error('Erro ao obter dados do cliente: ', error);
    res.status(500).send('Erro ao obter dados do cliente');
  }
};
