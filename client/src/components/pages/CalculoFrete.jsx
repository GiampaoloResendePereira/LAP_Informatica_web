// CalculoFrete.jsx
import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

function CalculoFrete() {
  const [cepOrigem, setCepOrigem] = useState("");
  const [cepDestino, setCepDestino] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [diametro, setDiametro] = useState("");
  const [largura, setLargura] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [valorFrete, setValorFrete] = useState(null);

  // Função para validar CEP de Vitória
  const isCepVitoria = (cep) => {
    return cep.startsWith("290"); // CEPs de Vitória começam com "290"
  };

  // Função de cálculo do frete
  const calcularFrete = () => {
    // Validação de CEP
    if (!isCepVitoria(cepOrigem) || !isCepVitoria(cepDestino)) {
      alert("O cálculo de frete está disponível apenas para a cidade de Vitória - ES.");
      return;
    }

    // Cálculo básico de frete (exemplo: peso * 0.5 + volume * 0.2)
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);
    const diametroFloat = parseFloat(diametro);
    const larguraFloat = parseFloat(largura);

    const volume = alturaFloat * diametroFloat * larguraFloat;
    const valor = pesoFloat * 0.5 + volume * 0.2;

    setValorFrete(valor.toFixed(2));
    setShowSuccess(true);
  };

  return (
    <Container className="p-4">
      <h2>Calcular Frete</h2>

      {/* Alerta de sucesso */}
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Cálculo feito com sucesso! Valor do frete: R$ {valorFrete}
        </Alert>
      )}

      <Form>
        <Row className="mb-3">
          {/* CEP de Origem */}
          <Col>
            <Form.Group controlId="cepOrigem">
              <Form.Label>CEP de Origem:</Form.Label>
              <Form.Control
                type="text"
                value={cepOrigem}
                onChange={(e) => setCepOrigem(e.target.value)}
                placeholder="Digite o CEP de origem"
              />
            </Form.Group>
          </Col>

          {/* CEP de Destino */}
          <Col>
            <Form.Group controlId="cepDestino">
              <Form.Label>CEP de Destino:</Form.Label>
              <Form.Control
                type="text"
                value={cepDestino}
                onChange={(e) => setCepDestino(e.target.value)}
                placeholder="Digite o CEP de destino"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* Peso */}
          <Col md={4}>
            <Form.Group controlId="peso">
              <Form.Label>Peso (kg):</Form.Label>
              <Form.Control
                type="text"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Digite o peso"
              />
            </Form.Group>
          </Col>

          {/* Altura */}
          <Col md={4}>
            <Form.Group controlId="altura">
              <Form.Label>Altura (cm):</Form.Label>
              <Form.Control
                type="text"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Digite a altura"
              />
            </Form.Group>
          </Col>

          {/* Diâmetro */}
          <Col md={4}>
            <Form.Group controlId="diametro">
              <Form.Label>Diâmetro (cm):</Form.Label>
              <Form.Control
                type="text"
                value={diametro}
                onChange={(e) => setDiametro(e.target.value)}
                placeholder="Digite o diâmetro"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* Largura */}
          <Col md={4}>
            <Form.Group controlId="largura">
              <Form.Label>Largura (cm):</Form.Label>
              <Form.Control
                type="text"
                value={largura}
                onChange={(e) => setLargura(e.target.value)}
                placeholder="Digite a largura"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Botão Calcular */}
        <Button variant="primary" onClick={calcularFrete}>
          Calcular
        </Button>
      </Form>
    </Container>
  );
}

export default CalculoFrete;
