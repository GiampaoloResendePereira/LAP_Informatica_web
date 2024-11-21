import { getDeliveries, updateDeliveryStatus } from '../models/DeliveryModel.js';

export async function listarEntregas(req, res) {
  try {
    const [status, resposta] = await getDeliveries();
    res.status(status).json(resposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar entregas', error });
  }
}

export async function atualizarStatusEntrega(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const [statusCode, resposta] = await updateDeliveryStatus(id, status);
    res.status(statusCode).json(resposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar status da entrega', error });
  }
}
