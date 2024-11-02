import {
    createAula,
    getOneAula,
  } from '../models/CadastroClienteModel.js';
  import { isNullOrEmpty, validateAula } from '../validations/AulaValidation.js';
  
  export async function cadastroAula(req, res) {
    console.log('AulaController cadastroAula');
    //Criando constante aula
    const cadastro = req.body;
  
    if (validateAula(aula)) {
      res.status(400).json({ message: 'Aula não pode conter campos vazios' });
    } else {
      try {
        //Declarando status com o codigo da resposta e reposta como JSON
        const [status, resposta] = await createAula(aula);
        res.status(status).json(resposta);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    }
  }
  
  export async function mostrandoUmaAula(req, res) {
    console.log('AulaController mostrandoUmaAula');
    const { id } = req.params;
  
    if (isNullOrEmpty(id)) {
      res.status(400).json({ message: 'O id deve ser preenchido' });
    } else {
      try {
        const [status, resposta] = await getOneAula(id);
        res.status(status).json(resposta);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    }
  }