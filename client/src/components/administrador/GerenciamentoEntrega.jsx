// src/pages/GerenciamentoEntrega.jsx
import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import '../../styles/global.css';

function Gerenciamento() {
  // Estado para armazenar os filtros
  const [filters, setFilters] = useState({
    codigo: '',
    cliente: '',
    motoboy: '',
    status: '',
  });

  // Função para atualizar os filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Função para aplicar o filtro (aqui pode adicionar lógica para buscar os dados filtrados)
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Lógica para filtrar os dados vai aqui
    console.log('Filtros aplicados:', filters);
  };

  return (
    <div className="container mt-5">
      <h4 className= "estilo" style={{ color: 'white' }}>Gerenciamento de Entregas</h4>

      {/* Filtros de Pesquisa */}
      <Form onSubmit={handleFilterSubmit} className="mb-4">
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Pesquisar Código"
            name="codigo"
            value={filters.codigo}
            onChange={handleFilterChange}
          />
          <Form.Control
            type="text"
            placeholder="Pesquisar Cliente"
            name="cliente"
            value={filters.cliente}
            onChange={handleFilterChange}
          />
          <Form.Control
            type="text"
            placeholder="Pesquisar Motoboy"
            name="motoboy"
            value={filters.motoboy}
            onChange={handleFilterChange}
          />
          <Form.Control
            as="select"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">Status</option>
            <option value="pendente">Pendente</option>
            <option value="em_andamento">Em andamento</option>
            <option value="concluido">Concluído</option>
            <option value="cancelado">Cancelado</option>
          </Form.Control>
          <Button variant="danger" type="submit">Pesquisar</Button>
        </div>
      </Form>

      {/* Tabela de Entregas */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th>Cliente</th>
            <th>Motoboy</th>
            <th>Status</th>
            <th>Data Agendamento</th>
            <th>Data Entrega</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Exemplo de dados na tabela */}
          <tr>
            <td>001</td>
            <td>Cliente A</td>
            <td>Motoboy 1</td>
            <td>Pendente</td>
            <td>20/10/2024</td>
            <td>—</td>
            <td>
              <Button variant="danger" className="me-2">Detalhes</Button>
            </td>
          </tr>
          <tr>
            <td>002</td>
            <td>Cliente B</td>
            <td>Motoboy 2</td>
            <td>Em andamento</td>
            <td>19/10/2024</td>
            <td>—</td>
            <td>
              <Button variant="danger" className="me-2">Detalhes</Button>
            </td>
          </tr>
          {/* Continue com mais dados */}
        </tbody>
      </Table>
    </div>
  );
}

export default Gerenciamento;