import React, { useState } from "react";
import './CadastroMotoboy.css';

const CadastroCliente = () => {
  // Estados para armazenar os valores dos campos de entrada
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Função para tratar o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validações simples (pode ser expandido conforme a necessidade)
    if (!nome || !cpf || !email || !telefone || !dataNascimento || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Aqui você pode adicionar lógica para salvar os dados no banco
    // ou enviar os dados para um servidor

    console.log({
      nome,
      cpf,
      email,
      telefone,
      dataNascimento,
      senha,
    });

    alert("Cadastro realizado com sucesso!");
    // Limpar os campos após o cadastro
    setNome("");
    setCpf("");
    setEmail("");
    setTelefone("");
    setDataNascimento("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Cliente</h1>
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

        {/* Botão de Enviar */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
