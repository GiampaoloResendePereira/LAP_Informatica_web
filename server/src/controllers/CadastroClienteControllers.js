import { inserirCliente } from '../models/CadastroClienteModel.js';

export const cadastrarCliente = async (req, res) => {
  try {
    const cliente = req.body;
    await inserirCliente(cliente);
    res.status(201).send('Cliente cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar cliente: ', error);
    res.status(500).send('Erro ao cadastrar cliente.');
  }
};
