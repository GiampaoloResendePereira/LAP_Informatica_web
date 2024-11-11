import { updateParametro } from '../models/EditarParametroModel.js';
import { isNullOrEmpty, validateParametro } from '../Validation/EditarParametroValidation.js';

export async function atualizandoParametro(req, res) {
  console.log('EditarParametroController: Iniciando atualização do parâmetro');
  
  const { id } = req.params;
  const parametro = req.body;

  // Verifica se o ID é inválido ou se os parâmetros possuem campos vazios
  if (isNullOrEmpty(id) || !validateParametro(parametro)) {
    console.log('Validação falhou: Campos vazios ou ID ausente');
    return res.status(400).json({ message: 'Parâmetro não pode conter campos vazios ou inválidos' });
  }

  try {
    const [status, resposta] = await updateParametro(parametro, id);
    
    // Retorna o status e a resposta recebida do modelo
    console.log(`Atualização concluída com status ${status}`);
    res.status(status).json(resposta);
  } catch (error) {
    console.error('Erro ao atualizar o parâmetro:', error);
    res.status(500).json({ message: 'Erro interno no servidor', error });
  }
}
