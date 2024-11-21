import { getPedidos, updatePedidoStatus } from '../models/PedidoModel.js';

export async function listarPedidos(req, res) {
  try {
    const [status, resposta] = await getPedidos();
    res.status(status).json(resposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar pedidos', error });
  }
}

export async function atualizarStatusPedido(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const [statusCode, resposta] = await updatePedidoStatus(id, status);
    res.status(statusCode).json(resposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar status do pedido', error });
  }
}
