import { createCliente } from '../models/CadastroClienteModel.js';
import { validateCliente } from '../Validation/CadastroClienteValidation.js';

// Função de cadastro do cliente
export async function cadastroCliente(req, res) {
    console.log('CadastroClienteControllers cadastroCliente');
    const cliente = req.body;

    // Valida os dados do cliente
    const erro = validateCliente(cliente);
    if (erro) {
        return res.status(400).json({ message: erro });
    }

    try {
        const [status, resposta] = await createCliente(cliente); // Chama a função para criar o cliente
        res.status(status).json({ message: resposta });
    } catch (error) {
        console.error('Erro no cadastro:', error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
}
