import { updateAula } from '../models/AulaModel.js';
import { isNullOrEmpty, validateAula } from '../validations/AulaValidation.js';

export async function atualizandoAula(req, res) {
  console.log('AulaController atualizandoAula');
  const { id } = req.params;
  const aula = req.body;

  if (validateAula(aula) || isNullOrEmpty(id)) {
    res.status(400).json({ message: 'Aula não pode conter campos vazios' });
  } else {
    try {
      const [status, resposta] = await updateAula(aula, id);
      res.status(status).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
