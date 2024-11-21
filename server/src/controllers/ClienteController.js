import { obterDadosDoCliente } from '../models/ClienteModel.js';

export const obterDadosCliente = async (req, res) => {
  try {
    const { id } = req.query;
    const cliente = await obterDadosDoCliente(id);
    res.json(cliente);
  } catch (error) {
    console.error('Erro ao obter dados do cliente: ', error);
    res.status(500).send('Erro ao obter dados do cliente.');
  }
};
