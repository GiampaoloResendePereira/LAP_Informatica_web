// Função para validar os dados de cadastro do cliente
export function validateCliente(cliente) {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!cliente.nome || !cliente.sobrenome || !cliente.cpf || !cliente.telefone || !cliente.email || !cliente.senha || !cliente.data_nascimento) {
        return 'Todos os campos são obrigatórios.';
    }

    // Verifica se o CPF tem 11 caracteres
    if (cliente.cpf.length !== 11) {
        return 'CPF deve ter 11 dígitos.';
    }

    // Verifica se o CPF é um número válido (apenas números)
    if (!/^\d{11}$/.test(cliente.cpf)) {
        return 'CPF deve conter apenas números.';
    }

    // Verifica se o telefone tem o formato correto (apenas números)
    if (!/^\d{10,11}$/.test(cliente.telefone)) {
        return 'Telefone deve conter 10 ou 11 dígitos.';
    }

    // Verifica se o e-mail está no formato correto
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(cliente.email)) {
        return 'Formato de e-mail inválido.';
    }

    // Verifica se a senha tem no mínimo 6 caracteres
    if (cliente.senha.length < 6) {
        return 'A senha deve ter pelo menos 6 caracteres.';
    }

    // Verifica se a data de nascimento é válida
    const dataNascimento = new Date(cliente.cliente.data_nascimento);
    const idade = new Date().getFullYear() - dataNascimento.getFullYear();
    if (idade < 18) {
        return 'O cliente deve ser maior de idade para se cadastrar.';
    }

    return null; // Retorna null se não houver erros
}
