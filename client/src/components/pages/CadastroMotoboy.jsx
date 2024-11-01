import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

function CadastroMotoboy({ titulo, txtBtn, handleSubmit, id, tipo }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [placa, setPlaca] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  // Validações de campos e envio do formulário
  const submit = async (event) => {
    event.preventDefault();
    
    if (!nome || !cpf || !placa || !telefone || !dataNascimento || !senha || !confirmarSenha || !foto) {
      alert("Por favor, preencha todos os campos e adicione uma foto.");
      return;
    }
    
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const infoCadastro = {
      nome,
      cpf,
      telefone,
      placa,
      foto,
      senha,
      dataNascimento,
    };

    try {
      await handleSubmit(infoCadastro, id);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      navigate(`/cadastro-motoboy/${tipo}`);
    } catch (error) {
      console.debug('Erro ao cadastrar motoboy', error);
      alert("Erro ao realizar cadastro. Tente novamente.");
    }
  };

  // Função para lidar com o upload da foto e pré-visualização
  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    setFoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    
    <div className="container mt-5">
    
      <h4 className="estilo" style={{ color: 'white' }}>{titulo || "Cadastro do Motoboy"}</h4>
      
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Cadastro realizado com sucesso!
        </Alert>
      )}
      
      <Form onSubmit={submit}>
        <Form.Group controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo"
            required
          />
        </Form.Group>

        <Form.Group controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
            maxLength="11"
            required
          />
        </Form.Group>

        <Form.Group controlId="placa">
          <Form.Label>Placa da Moto:</Form.Label>
          <Form.Control
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            placeholder="Digite a placa da moto"
            maxLength="7"
            required
          />
        </Form.Group>

        <Form.Group controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite o telefone"
            required
          />
        </Form.Group>

        <Form.Group controlId="dataNascimento">
          <Form.Label>Data de Nascimento:</Form.Label>
          <Form.Control
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="senha">
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
            required
          />
        </Form.Group>

        <Form.Group controlId="confirmarSenha">
          <Form.Label>Confirmar Senha:</Form.Label>
          <Form.Control
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme a senha"
            required
          />
        </Form.Group>

        <Form.Group controlId="foto">
          <Form.Label>Foto 3x4:</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
            required
          />
          {fotoPreview && (
            <div className="mt-3">
              <p>Pré-visualização da Foto:</p>
              <img src={fotoPreview} alt="Pré-visualização" style={{ width: '100px', height: '133px' }} />
            </div>
          )}
        </Form.Group>
        
        <Button variant="danger" type="submit" className="mt-4 me-2">
          {txtBtn || "Cadastrar"}
        </Button>

      
        <Link className="btn btn-danger mt-4 ms-2" to="/administrador">
          {txtBtn || "Cancelar"}
        </Link>
      </Form>
      <br />
    </div>
  );
}

export default CadastroMotoboy;
