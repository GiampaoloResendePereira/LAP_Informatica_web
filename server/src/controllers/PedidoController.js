import { obterPedidos, atualizarStatusPedido } from '../models/PedidoModel.js';

export const listarPedidos = async (req, res) => {
  try {
    const pedidos = await obterPedidos();
    res.json(pedidos);
  } catch (error) {
    console.error('Erro ao obter pedidos: ', error);
    res.status(500).send('Erro ao obter pedidos');
  }
};

export const atualizarStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    await atualizarStatusPedido(id, status);
    res.send('Status do pedido atualizado com sucesso');
  } catch (error) {
    console.error('Erro ao atualizar status do pedido: ', error);
    res.status(500).send('Erro ao atualizar status do pedido');
  }
};
