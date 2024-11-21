import { listarPedidos as obterPedidosDoModelo } from '../models/PedidoModel.js';

export const listarPedidos = async (req, res) => {
  try {
    const pedidos = await obterPedidosDoModelo();
    res.json(pedidos);
  } catch (error) {
    console.error('Erro ao listar pedidos: ', error);
    res.status(500).send('Erro ao listar pedidos.');
  }
};

export const atualizarStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await atualizarStatusPedido(id, status);
    res.status(200).send('Status do pedido atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar status do pedido: ', error);
    res.status(500).send('Erro ao atualizar status do pedido.');
  }
};
