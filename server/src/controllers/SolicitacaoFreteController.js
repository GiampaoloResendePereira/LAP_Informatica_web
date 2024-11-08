import { createSolicitacao } from '../models/SolicitacaoFreteModel.js';
//import { validateSolicitacao } from '../Validation/SolicitacaoFreteValidation.js';

// Função de cadastro da solicitação de frete
export async function cadastroSolicitacao(req, res) {
    console.log('SolicitacaoFreteController: cadastroSolicitacao');
    const solicitacao = req.body;

    // Valida os dados da solicitação de frete
    const erro = validateSolicitacao(solicitacao);
    if (erro) {
        return res.status(400).json({ message: erro });
    }

    try {
        const [status, resposta] = await createSolicitacao(solicitacao); // Chama a função para criar a solicitação de frete
        res.status(status).json({ message: resposta });
    } catch (error) {
        console.error('Erro na Solicitacao de Frete:', error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
}
