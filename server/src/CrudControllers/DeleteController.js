import { deleteAula } from '../models/AulaModel.js';
import { isNullOrEmpty } from '../validations/AulaValidation.js';

export async function excluindoAula(req, res) {
  console.log('AulaController excluindoAula');
  const { id } = req.params;

  if (isNullOrEmpty(id)) {
    res.status(400).json({ message: 'O id deve ser preenchido' });
  } else {
    try {
      const [status, resposta] = await deleteAula(id);
      res.status(status).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
