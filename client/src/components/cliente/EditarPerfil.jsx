import React, { useState } from 'react';

function EditarPerfil() {
  // Estados para armazenar os valores dos campos
  const [cpfPesquisa, setCpfPesquisa] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Função simulada para buscar cliente com base no CPF
  const buscarClientePorCpf = (cpf) => {
    const clienteExemplo = {
      nome: 'João Silva',
      cpf: '12345678901',
      email: 'joao@email.com',
      telefone: '123456789',
      dataNascimento: '1990-01-01',
    };

    if (cpf === clienteExemplo.cpf) {
      setNome(clienteExemplo.nome);
      setCpf(clienteExemplo.cpf);
      setEmail(clienteExemplo.email);
      setTelefone(clienteExemplo.telefone);
      setDataNascimento(clienteExemplo.dataNascimento);
    } else {
      alert('Cliente não encontrado!');
    }
  };

  // Função para lidar com a submissão do formulário de cadastro
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar/editar o cliente vai aqui
    console.log('Dados do cliente:', { nome, cpf, email, telefone, dataNascimento, senha });
  };

  return (
    <div>
      <h1>Editar Perfil</h1>

      {/* Campo de pesquisa por CPF */}
      <div className="form-group">
        <label htmlFor="cpfPesquisa">Pesquisar por CPF:</label>
        <input
          type="text"
          id="cpfPesquisa"
          value={cpfPesquisa}
          onChange={(e) => setCpfPesquisa(e.target.value)}
          placeholder="Digite o CPF para buscar"
          maxLength="11"
        />
        <button type="button" onClick={() => buscarClientePorCpf(cpfPesquisa)}>Buscar</button>
      </div>

      {/* Formulário de Cadastro */}
      <form className="cadastro-form" onSubmit={handleSubmit}>
        {/* Campo Nome */}
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo"
          />
        </div>

        {/* Campo CPF */}
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
            maxLength="11"
            readOnly
          />
        </div>

        {/* Campo E-mail */}
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
          />
        </div>

        {/* Campo Telefone */}
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite o telefone"
          />
        </div>

        {/* Campo Data de Nascimento */}
        <div className="form-group">
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>

        {/* Campo Senha */}
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
          />
        </div>

        {/* Campo Confirmar Senha */}
        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme a senha"
          />
        </div>

        {/* Botões de Ação */}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default EditarPerfil;
