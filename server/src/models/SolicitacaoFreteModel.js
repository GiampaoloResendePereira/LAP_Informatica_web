import mysql from 'mysql2/promise';
import db from '../conexao.js'; // Importa a conexão com o banco

// Função para cadastrar a solicitação de frete no banco de dados
export async function createSolicitacao(solicitacao) {
    console.log('CadastroSolicitacaoModel: Create');

    const conexao = mysql.createPool(db); // Cria a pool de conexão com o banco de dados

    const sql = `INSERT INTO solicitacao_frete (
                    cep_origem, cep_destino, largura, altura, comprimento, peso, preco_total,
                    remetente_logradouro, remetente_bairro, remetente_numero, remetente_complemento, 
                    remetente_nome, remetente_telefone, remetente_cpf, remetente_email, 
                    destinatario_logradouro, destinatario_bairro, destinatario_numero, 
                    destinatario_complemento, destinatario_nome, destinatario_telefone, 
                    destinatario_cpf, destinatario_email
                 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
        solicitacao.ceporigem,
        solicitacao.cepdestino,
        solicitacao.largura,
        solicitacao.altura,
        solicitacao.comprimento,
        solicitacao.peso,
        solicitacao.valor,
        solicitacao.remetente_logradouro,
        solicitacao.remetente_bairro,
        solicitacao.remetente_numero,
        solicitacao.remetente_complemento,
        solicitacao.remetente_nome,
        solicitacao.remetente_telefone,
        solicitacao.remetente_cpf,
        solicitacao.remetente_email,
        solicitacao.destinatario_logradouro,
        solicitacao.destinatario_bairro,
        solicitacao.destinatario_numero,
        solicitacao.destinatario_complemento,
        solicitacao.destinatario_nome,
        solicitacao.destinatario_telefone,
        solicitacao.destinatario_cpf,
        solicitacao.destinatario_email,
    ];

    try {
        const [result] = await conexao.query(sql, params); // Executa o comando SQL com os parâmetros
        console.log('Solicitação de frete feita com sucesso');
        return [201, 'Solicitação de frete feita com sucesso'];
    } catch (error) {
        console.error('Erro ao solicitar o frete:', error);
        return [500, 'Erro ao solicitar o frete'];
    }
}
