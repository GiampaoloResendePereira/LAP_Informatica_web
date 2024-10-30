// src/pages/EditarParametro.jsx
import React, { useState } from 'react'; 
import { Form, Button, Alert } from 'react-bootstrap';
import '../../styles/global.css';

const EditarParametro = () => {
  const [parametros, setParametros] = useState({
    pesoMenos1Kg: 3.00,
    peso1a3Kg: 5.00,
    peso3a8Kg: 9.00,
    peso8a12Kg: 12.00,
    pesoAcima12Kg: "Não é possível transportar",
    precoPorKm: 0.50,
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParametros({ ...parametros, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode salvar os parâmetros, por exemplo, em um banco de dados ou em um estado global
    console.log('Parâmetros atualizados:', parametros);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="container mt-5">
      <h4 className= "estilo" style={{ color: 'white' }}>Editar Parâmetros de Cálculo de Frete</h4>
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Parâmetros atualizados com sucesso!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="pesoMenos1Kg">
          <Form.Label>Peso menor que 1Kg (R$)</Form.Label>
          <Form.Control
            type="number"
            name="pesoMenos1Kg"
            value={parametros.pesoMenos1Kg}
            onChange={handleChange}
            step="0.01"
          />
        </Form.Group>

        <Form.Group controlId="peso1a3Kg" className="mt-3">
          <Form.Label>Peso entre 1Kg e 3Kg (R$)</Form.Label>
          <Form.Control
            type="number"
            name="peso1a3Kg"
            value={parametros.peso1a3Kg}
            onChange={handleChange}
            step="0.01"
          />
        </Form.Group>

        <Form.Group controlId="peso3a8Kg" className="mt-3">
          <Form.Label>Peso entre 3Kg e 8Kg (R$)</Form.Label>
          <Form.Control
            type="number"
            name="peso3a8Kg"
            value={parametros.peso3a8Kg}
            onChange={handleChange}
            step="0.01"
          />
        </Form.Group>

        <Form.Group controlId="peso8a12Kg" className="mt-3">
          <Form.Label>Peso entre 8Kg e 12Kg (R$)</Form.Label>
          <Form.Control
            type="number"
            name="peso8a12Kg"
            value={parametros.peso8a12Kg}
            onChange={handleChange}
            step="0.01"
          />
        </Form.Group>

        <Form.Group controlId="pesoAcima12Kg" className="mt-3">
          <Form.Label>Peso acima de 12Kg</Form.Label>
          <Form.Control
            type="text"
            name="pesoAcima12Kg"
            value={parametros.pesoAcima12Kg}
            onChange={handleChange}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="precoPorKm" className="mt-3">
          <Form.Label>Preço por Km (R$)</Form.Label>
          <Form.Control
            type="number"
            name="precoPorKm"
            value={parametros.precoPorKm}
            onChange={handleChange}
            step="0.01"
          />
        </Form.Group>

        <Button variant="danger" type="submit" className="mt-4">
          Salvar Alterações
        </Button>
      </Form>
      <br />
    </div>
  );
};

export default EditarParametro;