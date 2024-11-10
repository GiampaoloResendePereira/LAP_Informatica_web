// Função para validar o formato do CEP (#####-###)
export const validarCep = (cep) => {
    const regexCep = /^[0-9]{5}-[0-9]{3}$/;
    return regexCep.test(cep);
};

// Função para validar o peso do pacote (deve ser entre 0 e 12 kg)
export const validarPeso = (peso) => {
    if (peso <= 0 || peso > 12) {
        return 'O peso deve ser entre 0 e 12 kg.';
    }
    return '';
};

// Função para validar as dimensões do pacote (máximo 30kg e 100cm de cada lado; soma dos lados não pode ser maior que 200cm)
export const validarDimensoes = (largura, altura, comprimento) => {
    const somaDimensoes = parseFloat(largura) + parseFloat(altura) + parseFloat(comprimento);

    if (largura <= 0 || altura <= 0 || comprimento <= 0) {
        return 'As dimensões devem ser maiores que zero.';
    }
    if (largura > 100 || altura > 100 || comprimento > 100) {
        return 'Cada lado do pacote deve ter no máximo 100 cm.';
    }
    if (somaDimensoes > 200) {
        return 'A soma das dimensões não pode ultrapassar 200 cm.';
    }
    return '';
};

// Função para validar o preço do frete (se foi calculado corretamente)
export const validarPrecoFrete = (preco) => {
    if (preco <= 0) {
        return 'O preço do frete deve ser maior que zero.';
    }
    return '';
};

// Função para validar os dados do remetente
export const validarDadosRemetente = (dados) => {
    const { nome, telefone, cpf, email, logradouro, bairro } = dados;

    if (!nome || nome.trim() === '') return 'Nome do remetente é obrigatório.';
    if (!telefone || telefone.trim() === '') return 'Telefone do remetente é obrigatório.';
    if (!cpf || cpf.trim() === '') return 'CPF do remetente é obrigatório.';
    if (!email || email.trim() === '') return 'Email do remetente é obrigatório.';
    if (!logradouro || logradouro.trim() === '') return 'Logradouro do remetente é obrigatório.';
    if (!bairro || bairro.trim() === '') return 'Bairro do remetente é obrigatório.';
    
    return '';
};

// Função para validar os dados do destinatário
export const validarDadosDestinatario = (dados) => {
    const { nome, telefone, cpf, email, logradouro, bairro } = dados;

    if (!nome || nome.trim() === '') return 'Nome do destinatário é obrigatório.';
    if (!telefone || telefone.trim() === '') return 'Telefone do destinatário é obrigatório.';
    if (!cpf || cpf.trim() === '') return 'CPF do destinatário é obrigatório.';
    if (!email || email.trim() === '') return 'Email do destinatário é obrigatório.';
    if (!logradouro || logradouro.trim() === '') return 'Logradouro do destinatário é obrigatório.';
    if (!bairro || bairro.trim() === '') return 'Bairro do destinatário é obrigatório.';
    
    return '';
};

// Função principal de validação que agrupa todas as validações acima
export const validarSolicitacaoFrete = (solicitacao) => {
    const {
        cepOrigem,
        cepDestino,
        largura,
        altura,
        comprimento,
        peso,
        precoFrete,
        remetente,
        destinatario
    } = solicitacao;

    // Validação do CEP
    if (!validarCep(cepOrigem)) return 'CEP de origem inválido. Formato correto: #####-###.';
    if (!validarCep(cepDestino)) return 'CEP de destino inválido. Formato correto: #####-###.';

    // Validação das dimensões
    const erroDimensao = validarDimensoes(largura, altura, comprimento);
    if (erroDimensao) return erroDimensao;

    // Validação do peso
    const erroPeso = validarPeso(peso);
    if (erroPeso) return erroPeso;

    // Validação do preço do frete
    const erroPrecoFrete = validarPrecoFrete(precoFrete);
    if (erroPrecoFrete) return erroPrecoFrete;

    // Validação dos dados do remetente
    const erroRemetente = validarDadosRemetente(remetente);
    if (erroRemetente) return erroRemetente;

    // Validação dos dados do destinatário
    const erroDestinatario = validarDadosDestinatario(destinatario);
    if (erroDestinatario) return erroDestinatario;

    return ''; // Todos os dados são válidos
};
