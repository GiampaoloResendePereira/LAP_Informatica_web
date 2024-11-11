import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditarParametro() {
  const { id } = useParams();

  // Declaração dos estados para valores e feedbacks
  const [valorMenos1Kg, setValorMenos1Kg] = useState(0);
  const [valor1a3Kg, setValor1a3Kg] = useState(0);
  const [valor3a8Kg, setValor3a8Kg] = useState(0);
  const [valor8a12Kg, setValor8a12Kg] = useState(0);
  const [valorPorKm, setValorPorKm] = useState(0);
  const [valoresIniciais, setValoresIniciais] = useState({});
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  // Função para carregar os parâmetros existentes ao montar o componente
  useEffect(() => {
    async function carregarParametro() {
      setLoading(true);
      try {
        const resposta = await fetch(`http://localhost:5000/obter-parametro/${id}`);
        const dados = await resposta.json();
        setValorMenos1Kg(dados.valorMenos1Kg);
        setValor1a3Kg(dados.valor1a3Kg);
        setValor3a8Kg(dados.valor3a8Kg);
        setValor8a12Kg(dados.valor8a12Kg);
        setValorPorKm(dados.valorPorKm);
        setValoresIniciais(dados); // Armazena os valores iniciais
      } catch (error) {
        setErro("Erro ao carregar parâmetros");
      } finally {
        setLoading(false);
      }
    }
    carregarParametro();
  }, [id]);

  // Função para editar o parâmetro
  async function editParametro(infoParametro, id) {
    setLoading(true);
    setErro(null);
    try {
      const resposta = await fetch(`http://localhost:5000/editar-parametro/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(infoParametro),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao editar parâmetro");
      }
      alert('Parâmetro editado com sucesso');
    } catch (error) {
      setErro("Erro na edição de parâmetro");
    } finally {
      setLoading(false);
    }
  }

  // Função para salvar alterações
  function salvarAlteracoes() {
    const infoParametro = { valorMenos1Kg, valor1a3Kg, valor3a8Kg, valor8a12Kg, valorPorKm };
    editParametro(infoParametro, id);
  }

  // Função para cancelar a edição e restaurar valores iniciais
  function cancelarEdicao() {
    setValorMenos1Kg(valoresIniciais.valorMenos1Kg);
    setValor1a3Kg(valoresIniciais.valor1a3Kg);
    setValor3a8Kg(valoresIniciais.valor3a8Kg);
    setValor8a12Kg(valoresIniciais.valor8a12Kg);
    setValorPorKm(valoresIniciais.valorPorKm);
  }

  return (
    <div className="container bg-light p-5">
      <h2 className="bg-dark text-white rounded p-3 mb-4">Editar Parâmetros de Frete</h2>

      {loading && <p>Carregando...</p>}
      {erro && <p className="text-danger">{erro}</p>}

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
              onChange={(e) => {
                const newValue = parseFloat(e.target.value);
                if (newValue >= (item.min || 0)) {
                  item.setValue(newValue);
                }
              }}
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
        <button onClick={salvarAlteracoes} className="btn btn-danger" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </button>
        <button onClick={cancelarEdicao} className="btn btn-secondary" disabled={loading}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default EditarParametro;
