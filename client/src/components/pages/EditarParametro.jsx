import React, { useState } from 'react';
import '../../styles/EditarParametro.css'

function EditarParametro() {
  // Estados para armazenar os valores de cada faixa de peso
  const [valorMenos1Kg, setValorMenos1Kg] = useState(3.00);
  const [valor1a3Kg, setValor1a3Kg] = useState(5.00);
  const [valor3a8Kg, setValor3a8Kg] = useState(9.00);
  const [valor8a12Kg, setValor8a12Kg] = useState(12.00);
  const [valorPorKm, setValorPorKm] = useState(0.50);

  // Função de validação para os valores de peso
  const validarValoresPeso = () => {
    if (
      valorMenos1Kg >= valor1a3Kg ||
      valor1a3Kg >= valor3a8Kg ||
      valor3a8Kg >= valor8a12Kg
    ) {
      alert("Valores devem ser crescentes conforme o peso aumenta.");
      return false;
    }
    return true;
  };

  // Função para salvar alterações
  const salvarAlteracoes = () => {
    if (validarValoresPeso()) {
      // Aqui, você poderia enviar os dados para a API ou atualizar o estado global
      alert("Parâmetros salvos com sucesso!");
    }
  };

  // Função para cancelar as alterações e voltar para a tela anterior
  const cancelarEdicao = () => {
    // Lógica para navegar para a tela anterior
    alert("Edição cancelada.");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto',  }}>
      <h2 >Editar Parâmetros de Frete</h2>

      {/* Tabela de Valor por Peso */}
      <div class="div-cinza" style={{ marginBottom: '20px', backgroundColor: 'black', color: 'white' }}>
        <h3>Tabela de Valor por Peso</h3>
        <div>
          <label>Menos de 1Kg: R$</label>
          <input
            type="number"
            step="0.01"
            value={valorMenos1Kg}
            onChange={(e) => setValorMenos1Kg(parseFloat(e.target.value))}
            min="0"
          />
        </div>
        <div>
          <label>Entre 1Kg e 3Kg: R$</label>
          <input
            type="number"
            step="0.01"
            value={valor1a3Kg}
            onChange={(e) => setValor1a3Kg(parseFloat(e.target.value))}
            min={valorMenos1Kg}
          />
        </div>
        <div>
          <label>Entre 3Kg e 8Kg: R$</label>
          <input
            type="number"
            step="0.01"
            value={valor3a8Kg}
            onChange={(e) => setValor3a8Kg(parseFloat(e.target.value))}
            min={valor1a3Kg}
          />
        </div>
        <div>
          <label>Entre 8Kg e 12Kg: R$</label>
          <input
            type="number"
            step="0.01"
            value={valor8a12Kg}
            onChange={(e) => setValor8a12Kg(parseFloat(e.target.value))}
            min={valor3a8Kg}
          />
        </div>
        <div>
          <label>Acima de 12Kg: </label>
          <span>Não é possível transportar</span>
        </div>
      </div>

      {/* Tabela de Preço por Km Rodado */}
      <div class="div-cinza" style={{ marginBottom: '20px', backgroundColor: 'black', color: 'white' }}>
        <h3>Tabela de Preço por Km Rodado</h3>
        <label>1 Km rodado: R$</label>
        <input
          type="number"
          step="0.01"
          value={valorPorKm}
          onChange={(e) => setValorPorKm(parseFloat(e.target.value))}
          min="0"
        />
      </div>

      {/* Botões de Ação */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={salvarAlteracoes} style={{ marginRight: '10px' }}>Salvar</button>
        <button onClick={cancelarEdicao}>Cancelar</button>
      </div>
    </div>
  );
}

export default EditarParametro;
