import { createAula } from '../models/AulaModel.js';
import { validateAula } from '../validations/AulaValidation.js';

export async function cadastroAula(req, res) {
  console.log('AulaController cadastroAula');
  const aula = req.body;

  if (validateAula(aula)) {
    res.status(400).json({ message: 'Aula não pode conter campos vazios' });
  } else {
    try {
      const [status, resposta] = await createAula(aula);
      res.status(status).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
