import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dados de exemplo para simular os pedidos com nome do cliente
const pedidosExemplo = [
  { id: 1, cpf: '12345678901', nomeCliente: 'João Silva', numeroPedido: 'PED001', status: 'Em trânsito', valor: 'R$ 50,00' },
  { id: 2, cpf: '98765432109', nomeCliente: 'Maria Oliveira', numeroPedido: 'PED002', status: 'Entregue', valor: 'R$ 75,00' },
  { id: 3, cpf: '56789012345', nomeCliente: 'Carlos Souza', numeroPedido: 'PED003', status: 'Aguardando', valor: 'R$ 100,00' },
  { id: 4, cpf: '11122334455', nomeCliente: 'Ana Costa', numeroPedido: 'PED004', status: 'Em trânsito', valor: 'R$ 120,00' },
  { id: 5, cpf: '22334455667', nomeCliente: 'Pedro Lima', numeroPedido: 'PED005', status: 'Entregue', valor: 'R$ 45,00' },
  { id: 6, cpf: '33445566778', nomeCliente: 'Julia Martins', numeroPedido: 'PED006', status: 'Aguardando', valor: 'R$ 80,00' },
  { id: 7, cpf: '44556677889', nomeCliente: 'Ricardo Pereira', numeroPedido: 'PED007', status: 'Em trânsito', valor: 'R$ 95,00' },
  { id: 8, cpf: '55667788990', nomeCliente: 'Beatriz Almeida', numeroPedido: 'PED008', status: 'Entregue', valor: 'R$ 60,00' },
  { id: 9, cpf: '66778899001', nomeCliente: 'Fernando Rocha', numeroPedido: 'PED009', status: 'Aguardando', valor: 'R$ 110,00' },
  { id: 10, cpf: '77889900112', nomeCliente: 'Cláudia Santos', numeroPedido: 'PED010', status: 'Em trânsito', valor: 'R$ 70,00' },
  { id: 11, cpf: '88990011223', nomeCliente: 'Lucas Ferreira', numeroPedido: 'PED011', status: 'Entregue', valor: 'R$ 130,00' },
  { id: 12, cpf: '99001122334', nomeCliente: 'Camila Rocha', numeroPedido: 'PED012', status: 'Aguardando', valor: 'R$ 150,00' },
  { id: 13, cpf: '10111222345', nomeCliente: 'Marcos Pinto', numeroPedido: 'PED013', status: 'Em trânsito', valor: 'R$ 65,00' },
  { id: 14, cpf: '21222333456', nomeCliente: 'Tânia Alves', numeroPedido: 'PED014', status: 'Entregue', valor: 'R$ 85,00' },
  { id: 15, cpf: '32333444567', nomeCliente: 'Eliane Costa', numeroPedido: 'PED015', status: 'Aguardando', valor: 'R$ 55,00' },
  { id: 16, cpf: '43444555678', nomeCliente: 'Rodrigo Souza', numeroPedido: 'PED016', status: 'Em trânsito', valor: 'R$ 90,00' },
  { id: 17, cpf: '54555666789', nomeCliente: 'Ricardo Lima', numeroPedido: 'PED017', status: 'Entregue', valor: 'R$ 115,00' },
  { id: 18, cpf: '65666777890', nomeCliente: 'Isabela Rocha', numeroPedido: 'PED018', status: 'Aguardando', valor: 'R$ 135,00' },
  { id: 19, cpf: '76777888901', nomeCliente: 'Juliana Silva', numeroPedido: 'PED019', status: 'Em trânsito', valor: 'R$ 100,00' },
  { id: 20, cpf: '87888999012', nomeCliente: 'Carlos Oliveira', numeroPedido: 'PED020', status: 'Entregue', valor: 'R$ 125,00' }
];

function GerenciamentoEntrega() {
  const [pesquisa, setPesquisa] = useState('');
  const [pedidos, setPedidos] = useState(pedidosExemplo);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  // Função para atualizar o filtro de pesquisa
  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  // Função para aplicar o filtro nos pedidos com base na pesquisa (somente número do pedido agora)
  const pedidosFiltrados = pedidos.filter((pedido) =>
    pedido.numeroPedido.includes(pesquisa)
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
    <div className="container bg-light p-5">
      <h2 className="bg-dark text-white rounded p-3 mb-4">Gerenciamento de Entregas</h2>

      {/* Filtro de Pesquisa */}
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Pesquisar por Número do Pedido:</label>
        <input
          type="text"
          value={pesquisa}
          onChange={handlePesquisaChange}
          placeholder="Digite Número do Pedido"
          style={{ marginLeft: '10px' }}
        />
      </div>

      {/* Tabela de Pedidos */}
      <table border="1" cellPadding="8" style={{ width: '100%', marginBottom: '20px', backgroundColor: '#f5f5f5', color: 'blcak' }}>
        <thead>
          <tr>
            <th>Número do Pedido</th>
            <th>Nome do Cliente</th>
            <th>CPF</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidosFiltrados.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.numeroPedido}</td>
              <td>{pedido.nomeCliente}</td> {/* Nome do Cliente */}
              <td>{pedido.cpf}</td> {/* CPF do Cliente */}
              <td>{pedido.valor}</td>
              <td>
                <button onClick={() => mostrarDetalhesPedido(pedido.id)} className="btn btn-danger" >Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Detalhes do Pedido */}
      {pedidoSelecionado && (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f5f5f5', color: 'black' }}>
          <h3>Detalhes do Pedido</h3>
          <p><strong>Número do Pedido:</strong> {pedidoSelecionado.numeroPedido}</p>
          <p><strong>Nome do Cliente:</strong> {pedidoSelecionado.nomeCliente}</p>
          <p><strong>CPF do Cliente:</strong> {pedidoSelecionado.cpf}</p>
          <p><strong>Valor:</strong> {pedidoSelecionado.valor}</p>
          {/* Adicione outras informações do pedido aqui */}
          <button onClick={fecharDetalhes} className="btn btn-danger" style={{ marginTop: '10px' }}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default GerenciamentoEntrega;
