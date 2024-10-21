import React, { useState } from 'react';
import '../../global.css';

function EditarCadastroCliente() {
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
    // Aqui você pode substituir essa função pela chamada real à API ou banco de dados para buscar o cliente
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

  // Função para validar o formulário
  const validateForm = () => {
    if (!nome || !email || !telefone || !dataNascimento) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return false;
    }
    return true;
  };

  // Função para lidar com a submissão do formulário de cadastro
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Valida o formulário antes de prosseguir
    if (!validateForm()) return;

    // Lógica para salvar/editar o cliente vai aqui
    console.log('Dados do cliente:', { nome, cpf, email, telefone, dataNascimento, senha });
  };

  // Função para deletar o cliente
  const handleDelete = () => {
    if (cpf) {
      if (window.confirm(`Tem certeza que deseja deletar o cliente com CPF: ${cpf}?`)) {
        console.log('Deletando cliente com CPF:', cpf);
        // Aqui você pode implementar a lógica para deletar o cliente do sistema
        resetFields();
      }
    } else {
      alert('Nenhum cliente selecionado para deletar.');
    }
  };

  // Função para resetar os campos
  const resetFields = () => {
    setNome('');
    setCpf('');
    setEmail('');
    setTelefone('');
    setDataNascimento('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <div className="container mt-5">
      <div>
        <h1>Editar Cadastro de Cliente</h1>

        {/* Campo de pesquisa por CPF */}
        <div className="container">
          <label htmlFor="cpfPesquisa">Pesquisar por CPF:</label>
          <input
            type="text"
            id="cpfPesquisa"
            value={cpfPesquisa}
            onChange={(e) => setCpfPesquisa(e.target.value)}
            placeholder="Digite o CPF para buscar"
            maxLength="11"
          />
          <hr />

          <button
            type="button"
            onClick={() => buscarClientePorCpf(cpfPesquisa)}
            style={{ marginRight: 'auto', backgroundColor: 'red', color: 'white' }}
          >
            Pesquisar
          </button>
        </div>
      </div>

      <div>
        <h1>Cadastro de Cliente</h1>

        {/* Formulário de Cadastro */}
        <form className="cadastro-form" onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <div className="container">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome completo"
              required
            />
          </div>

          {/* Campo CPF */}
          <div className="container">
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
          <div className="container">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o e-mail"
              required
            />
          </div>

          {/* Campo Telefone */}
          <div className="container">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Digite o telefone"
              required
            />
          </div>

          {/* Campo Data de Nascimento */}
          <div className="container">
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input
              type="date"
              id="dataNascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />
          </div>

          {/* Campo Senha */}
          <div className="container">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a senha"
              required
            />
          </div>

          {/* Campo Confirmar Senha */}
          <div className="container">
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Confirme a senha"
              required
            />
          </div>

          <hr />

          {/* Botões de Ação */}
          <button type="submit">Salvar</button>
          <button
            type="button"
            onClick={handleDelete}
            style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
          >
            Deletar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditarCadastroCliente;
