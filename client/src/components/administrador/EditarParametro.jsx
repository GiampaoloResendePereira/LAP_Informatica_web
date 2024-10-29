// src/pages/EditarParametro.jsx
import React, { useState } from 'react';
import '../../styles/EditarParametro.css';

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
    console.log('Parâmetros atualizados:', parametros);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="container">
      <h4 className="estilo" style={{ color: 'white' }}>Editar Parâmetros de Cálculo de Frete</h4>
      
      {showSuccess && (
        <div className="alert alert-success">
          Parâmetros atualizados com sucesso!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="parametros-form">
        <div className="form-group">
          <label>Peso menor que 1Kg (R$)</label>
          <input
            type="number"
            name="pesoMenos1Kg"
            value={parametros.pesoMenos1Kg}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Peso entre 1Kg e 3Kg (R$)</label>
          <input
            type="number"
            name="peso1a3Kg"
            value={parametros.peso1a3Kg}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Peso entre 3Kg e 8Kg (R$)</label>
          <input
            type="number"
            name="peso3a8Kg"
            value={parametros.peso3a8Kg}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Peso entre 8Kg e 12Kg (R$)</label>
          <input
            type="number"
            name="peso8a12Kg"
            value={parametros.peso8a12Kg}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Peso acima de 12Kg</label>
          <input
            type="text"
            name="pesoAcima12Kg"
            value={parametros.pesoAcima12Kg}
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Preço por Km (R$)</label>
          <input
            type="number"
            name="precoPorKm"
            value={parametros.precoPorKm}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditarParametro;
