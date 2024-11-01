// src/pages/AceitarCorridas.jsx
import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';

function AceitarCorridas() {
  // Estado para armazenar as corridas disponíveis e a corrida selecionada
  const [corridas, setCorridas] = useState([
    { id: 1, cliente: 'Cliente A', destino: 'Rua A, 123', horario: '15:30', status: 'Disponível' },
    { id: 2, cliente: 'Cliente B', destino: 'Av. B, 456', horario: '16:00', status: 'Disponível' },
    { id: 3, cliente: 'Cliente C', destino: 'Rua C, 789', horario: '16:30', status: 'Disponível' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [corridaSelecionada, setCorridaSelecionada] = useState(null);

  // Função para abrir o modal de confirmação
  const handleAccept = (id) => {
    const corrida = corridas.find(corrida => corrida.id === id);
    setCorridaSelecionada(corrida);
    setShowModal(true);
  };

  // Função para confirmar a corrida
  const confirmarCorrida = () => {
    setCorridas(corridas.map(corrida => 
      corrida.id === corridaSelecionada.id ? { ...corrida, status: 'Aceita' } : corrida
    ));
    setShowModal(false);
  };

  return (
    <Container className="mt-5">
      <h4 className="text-white mb-4">Aceitar Corridas</h4>
      <Row xs={1} md={2} lg={3} className="g-4">
        {corridas.map(corrida => (
          <Col key={corrida.id}>
            <Card bg="dark" text="light" className="h-100">
              <Card.Body>
                <Card.Title>ID: {corrida.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Cliente: {corrida.cliente}</Card.Subtitle>
                <Card.Text>
                  <strong>Destino:</strong> {corrida.destino} <br />
                  <strong>Horário:</strong> {corrida.horario} <br />
                  <strong>Status:</strong> {corrida.status}
                </Card.Text>
                {corrida.status === 'Disponível' && (
                  <Button variant="success" onClick={() => handleAccept(corrida.id)}>
                    Aceitar
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal de confirmação */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Corrida</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja aceitar a corrida para o destino: <strong>{corridaSelecionada?.destino}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={confirmarCorrida}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AceitarCorridas;
