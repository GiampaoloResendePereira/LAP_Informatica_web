// Importações de módulos e estilos
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../../global.css';

function EditarCadastroMotoboy() {
  // Gerenciamento de estado para os campos do formulário
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
    // Lógica de edição do cadastro
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
    // Lógica de deletar o motoboy do sistema
  };

  return (
    <div className="container mt-5">
      <h1>Editar Cadastro de Motoboy</h1>

      {/* Alerta de sucesso */}
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Cadastro atualizado com sucesso!
        </Alert>
      )}

      {/* Campos de filtro para pesquisa */}
      <Form.Group controlId="filtroCpf" className="mb-3">
        <Form.Label>Pesquisar por CPF:</Form.Label>
        <Form.Control
          type="text"
          value={filtroCpf}
          onChange={(e) => setFiltroCpf(e.target.value)}
          placeholder="Digite o CPF"
          maxLength="11"
          aria-label="Filtro de CPF"
        />
      </Form.Group>

      <Form.Group controlId="filtroPlaca" className="mb-3">
        <Form.Label>Pesquisar por Placa da Moto:</Form.Label>
        <Form.Control
          type="text"
          value={filtroPlaca}
          onChange={(e) => setFiltroPlaca(e.target.value)}
          placeholder="Digite a placa da moto"
          aria-label="Filtro de placa de moto"
        />
        <Button variant="danger" onClick={handleSearch} className="mb-4" >
        Pesquisar
      </Button>
      </Form.Group>


      {/* Formulário de edição do cadastro */}
      <h2>Cadastro de Motoboy</h2>
      <Form onSubmit={handleSubmit} className="cadastro-form">
        
        {/* Campo Nome */}
        <Form.Group controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo"
            required
            aria-label="Nome completo"
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
            required
            aria-label="CPF"
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
            required
            aria-label="E-mail"
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
            required
            aria-label="Telefone"
          />
        </Form.Group>

        {/* Campo Data de Nascimento */}
        <Form.Group controlId="dataNascimento">
          <Form.Label>Data de Nascimento:</Form.Label>
          <Form.Control
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
            aria-label="Data de nascimento"
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
            required
            aria-label="Placa da moto"
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
            required
            aria-label="Senha"
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
            required
            aria-label="Confirmar senha"
          />
        </Form.Group>

        {/* Botões de ação */}
        <div className="button-group mt-4">
        <Button variant="danger" type="submit" style={{ marginRight: '15px' }}>
  Salvar
</Button>
<Button variant="danger" onClick={handleDelete}>
  Deletar
</Button>

        </div>
      </Form>
    </div>
  );
}

export default EditarCadastroMotoboy;
