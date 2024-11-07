import React, { useState, useEffect } from 'react';

// Dados de exemplo para simular os pedidos, substitua com dados reais
const pedidosExemplo = [
  { id: 1, cpf: '12345678901', numeroPedido: 'PED001', status: 'Em trânsito', valor: 'R$ 50,00' },
  { id: 2, cpf: '98765432109', numeroPedido: 'PED002', status: 'Entregue', valor: 'R$ 75,00' },
  { id: 3, cpf: '56789012345', numeroPedido: 'PED003', status: 'Aguardando', valor: 'R$ 100,00' },
  { id: 4, cpf: '11122334455', numeroPedido: 'PED004', status: 'Em trânsito', valor: 'R$ 120,00' },
  { id: 5, cpf: '22334455667', numeroPedido: 'PED005', status: 'Entregue', valor: 'R$ 45,00' },
  { id: 6, cpf: '33445566778', numeroPedido: 'PED006', status: 'Aguardando', valor: 'R$ 80,00' },
  { id: 7, cpf: '44556677889', numeroPedido: 'PED007', status: 'Em trânsito', valor: 'R$ 95,00' },
  { id: 8, cpf: '55667788990', numeroPedido: 'PED008', status: 'Entregue', valor: 'R$ 60,00' },
  { id: 9, cpf: '66778899001', numeroPedido: 'PED009', status: 'Aguardando', valor: 'R$ 110,00' },
  { id: 10, cpf: '77889900112', numeroPedido: 'PED010', status: 'Em trânsito', valor: 'R$ 70,00' },
  { id: 11, cpf: '88990011223', numeroPedido: 'PED011', status: 'Entregue', valor: 'R$ 130,00' },
  { id: 12, cpf: '99001122334', numeroPedido: 'PED012', status: 'Aguardando', valor: 'R$ 150,00' },
  { id: 13, cpf: '10111222345', numeroPedido: 'PED013', status: 'Em trânsito', valor: 'R$ 65,00' },
  { id: 14, cpf: '21222333456', numeroPedido: 'PED014', status: 'Entregue', valor: 'R$ 85,00' },
  { id: 15, cpf: '32333444567', numeroPedido: 'PED015', status: 'Aguardando', valor: 'R$ 55,00' },
  { id: 16, cpf: '43444555678', numeroPedido: 'PED016', status: 'Em trânsito', valor: 'R$ 90,00' },
  { id: 17, cpf: '54555666789', numeroPedido: 'PED017', status: 'Entregue', valor: 'R$ 115,00' },
  { id: 18, cpf: '65666777890', numeroPedido: 'PED018', status: 'Aguardando', valor: 'R$ 135,00' },
  { id: 19, cpf: '76777888901', numeroPedido: 'PED019', status: 'Em trânsito', valor: 'R$ 100,00' },
  { id: 20, cpf: '87888999012', numeroPedido: 'PED020', status: 'Entregue', valor: 'R$ 125,00' }
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
      <table border="1" cellPadding="8" style={{ width: '100%', marginBottom: '20px', backgroundColor: 'black', color: 'white' }}>
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
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'black', color: 'white' }}>
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
