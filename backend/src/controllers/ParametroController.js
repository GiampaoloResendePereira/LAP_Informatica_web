import { getParametro, updateParametro } from '../models/ParametroModel.js';

export async function obterParametro(req, res) {
  const { id } = req.params;

  try {
    const [status, resposta] = await getParametro(id);
    res.status(status).json(resposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter parâmetro', error });
  }
}

export async function editarParametro(req, res) {
  const { id } = req.body;
  const { limite, valor, tipo } = req.body;

  try {
    const [status, resposta] = await updateParametro(id, limite, valor, tipo);
    res.status(status).json(resposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao editar parâmetro', error });
  }
}
