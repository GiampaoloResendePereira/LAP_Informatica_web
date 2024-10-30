import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './CadastroMotoboy.css';

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

    const infoCadastro = { nome, cpf, telefone, placa, foto, senha, dataNascimento };

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

  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    setFoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container" style={{ marginTop: "40px", maxWidth: "500px", color: 'white' }}>
      <h4>{titulo || "Cadastro do Motoboy"}</h4>
      {showSuccess && (
        <div className="alert-success" role="alert">
          Cadastro realizado com sucesso!
        </div>
      )}
      
      <form onSubmit={submit}>
        {[
          { id: "nome", label: "Nome:", type: "text", value: nome, setter: setNome, placeholder: "Digite o nome completo" },
          { id: "cpf", label: "CPF:", type: "text", value: cpf, setter: setCpf, placeholder: "Digite o CPF", maxLength: "11" },
          { id: "placa", label: "Placa da Moto:", type: "text", value: placa, setter: setPlaca, placeholder: "Digite a placa da moto", maxLength: "7" },
          { id: "telefone", label: "Telefone:", type: "text", value: telefone, setter: setTelefone, placeholder: "Digite o telefone" },
          { id: "dataNascimento", label: "Data de Nascimento:", type: "date", value: dataNascimento, setter: setDataNascimento },
          { id: "senha", label: "Senha:", type: "password", value: senha, setter: setSenha, placeholder: "Digite a senha" },
          { id: "confirmarSenha", label: "Confirmar Senha:", type: "password", value: confirmarSenha, setter: setConfirmarSenha, placeholder: "Confirme a senha" },
        ].map(({ id, label, type, value, setter, placeholder, maxLength }) => (
          <div key={id} className="form-group mt-3">
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={value}
              onChange={(e) => setter(e.target.value)}
              placeholder={placeholder}
              maxLength={maxLength}
              required
              className="form-control"
            />
          </div>
        ))}

        <div className="form-group mt-3">
          <label htmlFor="foto">Foto 3x4:</label>
          <input
            type="file"
            id="foto"
            accept="image/*"
            onChange={handleFotoChange}
            required
            className="form-control"
          />
          {fotoPreview && (
            <div className="mt-3">
              <p>Pré-visualização da Foto:</p>
              <img src={fotoPreview} alt="Pré-visualização" style={{ width: '100px', height: '133px' }} />
            </div>
          )}
        </div>

        <div className="buttons mt-4" style={{ display: "flex", gap: "10px" }}>
          <button type="submit" className="btn-primary">{txtBtn || "Cadastrar"}</button>
          <Link to="/administrador" className="btn-secondary">{txtBtn || "Cancelar"}</Link>
        </div>
      </form>
    </div>
  );
}

export default CadastroMotoboy;
