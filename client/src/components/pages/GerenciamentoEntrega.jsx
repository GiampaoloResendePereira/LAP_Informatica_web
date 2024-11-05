import React, { useState, useEffect } from 'react';

// Dados de exemplo para simular os pedidos, substitua com dados reais
const pedidosExemplo = [
  { id: 1, cpf: '12345678901', numeroPedido: 'PED001', status: 'Em trânsito', valor: 'R$ 50,00' },
  { id: 2, cpf: '98765432109', numeroPedido: 'PED002', status: 'Entregue', valor: 'R$ 75,00' },
  { id: 3, cpf: '56789012345', numeroPedido: 'PED003', status: 'Aguardando', valor: 'R$ 100,00' },
];

function GerenciamentoEntrega() {
  const [pesquisa, setPesquisa] = useState('');
  const [pedidos, setPedidos] = useState(pedidosExemplo);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  // Função para atualizar o filtro de pesquisa
  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  // Função para aplicar o filtro nos pedidos com base na pesquisa
  const pedidosFiltrados = pedidos.filter((pedido) =>
    pedido.cpf.includes(pesquisa) || pedido.numeroPedido.includes(pesquisa)
  );

  // Função para exibir os detalhes do pedido selecionado
  const mostrarDetalhesPedido = (pedidoId) => {
    const pedido = pedidos.find((p) => p.id === pedidoId);
    setPedidoSelecionado(pedido);
  };

  // Fechar o modal de detalhes
  const fecharDetalhes = () => {
    setPedidoSelecionado(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gerenciamento de Entregas</h2>

      {/* Filtro de Pesquisa */}
      <div style={{ marginBottom: '20px' }}>
        <label>Pesquisar por CPF ou Número do Pedido:</label>
        <input
          type="text"
          value={pesquisa}
          onChange={handlePesquisaChange}
          placeholder="Digite CPF ou Número do Pedido"
          style={{ marginLeft: '10px' }}
        />
      </div>

      {/* Tabela de Pedidos */}
      <table border="1" cellPadding="8" style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Número do Pedido</th>
            <th>CPF do Cliente</th>
            <th>Status</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidosFiltrados.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.numeroPedido}</td>
              <td>{pedido.cpf}</td>
              <td>{pedido.status}</td>
              <td>{pedido.valor}</td>
              <td>
                <button onClick={() => mostrarDetalhesPedido(pedido.id)}>Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Detalhes do Pedido */}
      {pedidoSelecionado && (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3>Detalhes do Pedido</h3>
          <p><strong>Número do Pedido:</strong> {pedidoSelecionado.numeroPedido}</p>
          <p><strong>CPF do Cliente:</strong> {pedidoSelecionado.cpf}</p>
          <p><strong>Status:</strong> {pedidoSelecionado.status}</p>
          <p><strong>Valor:</strong> {pedidoSelecionado.valor}</p>
          {/* Adicione outras informações do pedido aqui */}
          <button onClick={fecharDetalhes} style={{ marginTop: '10px' }}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default GerenciamentoEntrega;
