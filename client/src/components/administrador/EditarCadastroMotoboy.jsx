import { useState } from 'react';
import './EditarCadastroMotoboy';

function EditarCadastroMotoboy() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [placaMoto, setPlacaMoto] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [filtroCpf, setFiltroCpf] = useState('');
  const [filtroPlaca, setFiltroPlaca] = useState('');

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro enviado', { nome, cpf, email, telefone, dataNascimento, placaMoto, senha });
  };

  // Função de pesquisa por CPF e Placa de Moto
  const handleSearch = () => {
    console.log('Buscando motoboy por CPF e/ou Placa de Moto', { filtroCpf, filtroPlaca });
  };

  // Função de deletar cadastro
  const handleDelete = () => {
    console.log('Deletando cadastro de motoboy com CPF:', cpf);
    // Aqui você pode implementar a lógica de deletar o motoboy do sistema
  };

  return (
    <div>
      <h1>Editar Cadastro de Motoboy</h1>

      <div className="pesquisa-container">
        <h2>Pesquisar Motoboy</h2>
        <div className="form-group">
          <label htmlFor="filtroCpf">Pesquisar por CPF:</label>
          <input
            type="text"
            id="filtroCpf"
            value={filtroCpf}
            onChange={(e) => setFiltroCpf(e.target.value)}
            placeholder="Digite o CPF"
            maxLength="11"
          />
        </div>

        <div className="form-group">
          <label htmlFor="filtroPlaca">Pesquisar por Placa da Moto:</label>
          <input
            type="text"
            id="filtroPlaca"
            value={filtroPlaca}
            onChange={(e) => setFiltroPlaca(e.target.value)}
            placeholder="Digite a placa da moto"
          />
        </div>

        <button onClick={handleSearch}>Pesquisar</button>
      </div>

      <div className="cadastro-container">
        <h2>Cadastro de Motoboy</h2>
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

          {/* Campo Placa da Moto */}
          <div className="form-group">
            <label htmlFor="placaMoto">Placa da Moto:</label>
            <input
              type="text"
              id="placaMoto"
              value={placaMoto}
              onChange={(e) => setPlacaMoto(e.target.value)}
              placeholder="Digite a placa da moto"
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
          <button type="button" onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
            Deletar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditarCadastroMotoboy;
