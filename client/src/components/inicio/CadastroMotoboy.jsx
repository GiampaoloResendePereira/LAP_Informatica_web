import React, { useState, useEffect } from "react";
import '../../global.css';


const CadastroMotoboy = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [placaMoto, setPlacaMoto] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [motoboys, setMotoboys] = useState([]);
  const [erroCpf, setErroCpf] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  // Carregar motoboys do localStorage ao iniciar
  useEffect(() => {
    const savedMotoboys = JSON.parse(localStorage.getItem('motoboys')) || [];
    setMotoboys(savedMotoboys);
  }, []);

  // Salvar motoboys no localStorage sempre que a lista for atualizada
  useEffect(() => {
    localStorage.setItem('motoboys', JSON.stringify(motoboys));
  }, [motoboys]);

  // Função para validar CPF
  const validarCpf = (cpf) => {
    return /^[0-9]{11}$/.test(cpf); // Apenas números e 11 dígitos
  };

  // Função para validar telefone
  const validarTelefone = (telefone) => {
    return /^\(\d{2}\)\s\d{5}-\d{4}$/.test(telefone); // Exemplo: (99) 99999-9999
  };

  // Função para tratar o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validações simples
    if (!nome || !cpf || !email || !telefone || !dataNascimento || !placaMoto || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Validação de CPF
    if (!validarCpf(cpf)) {
      setErroCpf("CPF inválido. Deve conter 11 dígitos.");
      return;
    } else {
      setErroCpf("");
    }

    // Validação de telefone
    if (!validarTelefone(telefone)) {
      setErroTelefone("Telefone inválido. Use o formato (XX) XXXXX-XXXX.");
      return;
    } else {
      setErroTelefone("");
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem.");
      return;
    } else {
      setErroSenha("");
    }

    // Criar um objeto com os dados do motoboy
    const novoMotoboy = {
      nome,
      cpf,
      email,
      telefone,
      dataNascimento,
      placaMoto,
      senha,
    };

    // Adicionar o novo motoboy à lista de motoboys
    setMotoboys([...motoboys, novoMotoboy]);

    alert("Cadastro de motoboy realizado com sucesso!");

    // Limpar os campos após o cadastro
    setNome("");
    setCpf("");
    setEmail("");
    setTelefone("");
    setDataNascimento("");
    setPlacaMoto("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <div className="container">
      <h1>Cadastro de Motoboy</h1>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        {/* Campos de entrada */}
        <div className="container">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo"
          />
        </div>

        <div className="container">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
            maxLength="11"
          />
          {erroCpf && <p className="erro">{erroCpf}</p>}
        </div>

        <div className="container">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
          />
        </div>

        <div className="container">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite o telefone"
          />
          {erroTelefone && <p className="erro">{erroTelefone}</p>}
        </div>

        <div className="container">
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>

        <div className="container">
          <label htmlFor="placaMoto">Placa da Moto:</label>
          <input
            type="text"
            id="placaMoto"
            value={placaMoto}
            onChange={(e) => setPlacaMoto(e.target.value)}
            placeholder="Digite a placa da moto"
          />
        </div>

        <div className="container">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
          />
        </div>

        <div className="container">
          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme a senha"
          />
          {erroSenha && <p className="erro">{erroSenha}</p>}
        </div>

        {/* Botão de Enviar */}
        <button type="submit">Cadastrar</button>
      </form>

      
    </div>
  );
};

export default CadastroMotoboy;
