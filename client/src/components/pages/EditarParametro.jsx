import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditarParametro() {
  const { id } = useParams();

  // Declaração dos estados para cada valor
  const [valorMenos1Kg, setValorMenos1Kg] = useState(0);
  const [valor1a3Kg, setValor1a3Kg] = useState(0);
  const [valor3a8Kg, setValor3a8Kg] = useState(0);
  const [valor8a12Kg, setValor8a12Kg] = useState(0);
  const [valorPorKm, setValorPorKm] = useState(0);

  // Função para edição do parâmetro
  async function editParametro(infoParametro, id) {
    try {
      const resposta = await fetch(`http://localhost:5000/aulas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(infoParametro),
      });

      if (!resposta.ok) {
        console.log('Erro ao editar parâmetro');
      } else {
        alert('Parâmetro editado com sucesso');
      }
    } catch (error) {
      console.error('Erro na edição de parâmetro', error);
    }
  }

  // Função para salvar alterações
  function salvarAlteracoes() {
    const infoParametro = { valorMenos1Kg, valor1a3Kg, valor3a8Kg, valor8a12Kg, valorPorKm };
    editParametro(infoParametro, id);
  }

  // Função para cancelar a edição
  function cancelarEdicao() {
    setValorMenos1Kg(0);
    setValor1a3Kg(0);
    setValor3a8Kg(0);
    setValor8a12Kg(0);
    setValorPorKm(0);
  }

  return (
    <div className="container bg-light p-5">
      <h2 className="bg-dark text-white rounded p-3 mb-4">Editar Parâmetros de Frete</h2>

      {/* Tabela de Valor por Peso */}
      <div className="mb-4 p-3 border rounded bg-white shadow-sm">
        <h3 className="mb-3">Tabela de Valor por Peso</h3>
        {[{ label: "Menos de 1Kg", value: valorMenos1Kg, setValue: setValorMenos1Kg },
          { label: "Entre 1Kg e 3Kg", value: valor1a3Kg, setValue: setValor1a3Kg, min: valorMenos1Kg },
          { label: "Entre 3Kg e 8Kg", value: valor3a8Kg, setValue: setValor3a8Kg, min: valor1a3Kg },
          { label: "Entre 8Kg e 12Kg", value: valor8a12Kg, setValue: setValor8a12Kg, min: valor3a8Kg },
        ].map((item, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">{item.label}: R$</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={item.value}
              onChange={(e) => item.setValue(parseFloat(e.target.value))}
              min={item.min || 0}
            />
          </div>
        ))}
        <div className="mb-3">
          <label className="form-label">Acima de 12Kg:</label>
          <span> Não é possível transportar</span>
        </div>
      </div>

      {/* Tabela de Preço por Km Rodado */}
      <div className="mb-4 p-3 border rounded bg-white shadow-sm">
        <h3 className="mb-3">Tabela de Preço por Km Rodado</h3>
        <label className="form-label">1 Km rodado: R$</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          value={valorPorKm}
          onChange={(e) => setValorPorKm(parseFloat(e.target.value))}
          min="0"
        />
      </div>

      {/* Botões de Ação */}
      <div className="d-flex justify-content-between">
        <button onClick={salvarAlteracoes} className="btn btn-danger">Salvar</button>
        <button onClick={cancelarEdicao} className="btn btn-secondary">Cancelar</button>
      </div>
    </div>
  );
}

export default EditarParametro;
