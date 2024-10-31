import { useEffect, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';

function CadastroCliente({ titulo, txtBtn, handleSubmit, id, tipo }) {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      cliente(id);
    }
  }, [id]);

  async function cliente(id) {
    try {
      const resposta = await fetch(`http://localhost:5000/clientes/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const respostaJSON = await resposta.json();
      if (!resposta.ok) {
        console.debug('Erro ao buscar cliente', respostaJSON);
      } else {
        setNome(respostaJSON.nome);
        setCpf(respostaJSON.cpf);
        setEmail(respostaJSON.email);
        setTelefone(respostaJSON.telefone);
        setDataNascimento(respostaJSON.dataNascimento);
        setSenha('');
        setConfirmarSenha('');
        setShowSuccess(false);
        console.log(respostaJSON);
      }
    } catch (error) {
      console.debug('Erro ao buscar cliente', error);
    }
  }

  function validateFields() {
    // Validação de campos
    if (!nome || !cpf || !email || !telefone || !dataNascimento || !senha || !confirmarSenha) {
      setMensagem("Todos os campos são obrigatórios.");
      return false;
    }
    if (senha !== confirmarSenha) {
      setMensagem("As senhas não correspondem.");
      return false;
    }
    if (!/^\d{11}$/.test(cpf)) {
      setMensagem("CPF deve ter 11 dígitos.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMensagem("E-mail inválido.");
      return false;
    }
    setMensagem(""); // Limpa mensagem se tudo estiver correto
    return true;
  }

  function submit(e) {
    e.preventDefault();
    if (!validateFields()) return; // Verifica se os campos são válidos

    const infoCliente = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      dataNascimento: dataNascimento,
      senha: senha,
      chave: null,
    };
    handleSubmit(infoCliente, id)
      .then(() => {
        setMensagem("Cadastro realizado com sucesso!");
        setShowSuccess(true);
        navigate(`/cadastro-cliente/${tipo}`);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar cliente", error);
        setMensagem("Erro ao cadastrar cliente. Tente novamente.");
      });
  }

  return (
    <div className="container justify-content-center col-sm-12 col-md-6 col-lg-3">
      <h1 className="text-center">{titulo}</h1>
      {mensagem && <div className={`alert ${showSuccess ? 'alert-success' : 'alert-danger'}`} role="alert">{mensagem}</div>}
      <form onSubmit={submit}>
        <label className="form-label" htmlFor="nome">
          Nome:
        </label>
        <input
          className="form-control"
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label className="form-label" htmlFor="cpf">
          CPF:
        </label>
        <input
          className="form-control"
          type="text"
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label" htmlFor="telefone">
          Telefone:
        </label>
        <input
          className="form-control"
          type="text"
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <label className="form-label" htmlFor="dataNascimento">
          Data de Nascimento:
        </label>
        <input
          className="form-control"
          type="date"
          id="dataNascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />

        <label className="form-label" htmlFor="senha">
          Senha:
        </label>
        <input
          className="form-control"
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <label className="form-label" htmlFor="confirmarSenha">
          Confirmar Senha:
        </label>
        <input
          className="form-control"
          type="password"
          id="confirmarSenha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <Link className="btn btn-danger mt-2" to="/inicio">
          Cancelar
        </Link>

        <button className="btn btn-success mt-2 float-end" type="submit">
          {txtBtn}
        </button>
      </form>
    </div>
  );
}

export default CadastroCliente;
