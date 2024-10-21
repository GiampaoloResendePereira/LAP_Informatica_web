import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../../global.css';

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
  const [showAlert, setShowAlert] = useState(false);

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de edição do cadastro
    console.log('Cadastro enviado', { nome, cpf, email, telefone, dataNascimento, placaMoto, senha });
    setShowAlert(true);
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
    <div className="container mt-5">
      <h1>Editar Cadastro de Motoboy</h1>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Cadastro atualizado com sucesso!
        </Alert>
      )}

      <div className="form-group mb-3">
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

      <div className="form-group mb-3">
        <label htmlFor="filtroPlaca">Pesquisar por Placa da Moto:</label>
        <input
          type="text"
          id="filtroPlaca"
          value={filtroPlaca}
          onChange={(e) => setFiltroPlaca(e.target.value)}
          placeholder="Digite a placa da moto"
        />
      </div>

      <Button variant="danger" onClick={handleSearch} style={{ marginBottom: '20px' }}>
        Pesquisar
      </Button>

      <h2>Cadastro de Motoboy</h2>
      <Form className="cadastro-form" onSubmit={handleSubmit}>
        {/* Campo Nome */}
        <Form.Group controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo"
          />
        </Form.Group>

        {/* Campo CPF */}
        <Form.Group controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
            maxLength="11"
          />
        </Form.Group>

        {/* Campo E-mail */}
        <Form.Group controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
          />
        </Form.Group>

        {/* Campo Telefone */}
        <Form.Group controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite o telefone"
          />
        </Form.Group>

        {/* Campo Data de Nascimento */}
        <Form.Group controlId="dataNascimento">
          <Form.Label>Data de Nascimento:</Form.Label>
          <Form.Control
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </Form.Group>

        {/* Campo Placa da Moto */}
        <Form.Group controlId="placaMoto">
          <Form.Label>Placa da Moto:</Form.Label>
          <Form.Control
            type="text"
            value={placaMoto}
            onChange={(e) => setPlacaMoto(e.target.value)}
            placeholder="Digite a placa da moto"
          />
        </Form.Group>

        {/* Campo Senha */}
        <Form.Group controlId="senha">
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
          />
        </Form.Group>

        {/* Campo Confirmar Senha */}
        <Form.Group controlId="confirmarSenha">
          <Form.Label>Confirmar Senha:</Form.Label>
          <Form.Control
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme a senha"
          />
        </Form.Group>

        {/* Botões de Ação */}
        <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
          Salvar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Deletar
        </Button>
      </Form>
    </div>
  );
}

export default EditarCadastroMotoboy;
