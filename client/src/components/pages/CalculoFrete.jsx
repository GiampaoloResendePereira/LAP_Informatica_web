// src/pages/CalculoFrete.jsx
import React, { useState, useEffect } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Para navegação entre páginas
import '../../styles/global.css'; // Importando o CSS global
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculoFrete = () => {
  const [cepsVitoria, setCepsVitoria] = useState({});
  const [cepOrigem, setCepOrigem] = useState("");
  const [cepDestino, setCepDestino] = useState("");
  const [peso, setPeso] = useState("");
  const [precoFrete, setPrecoFrete] = useState(null);
  const [solicitarFrete, setSolicitarFrete] = useState(false);
  const navigate = useNavigate();

  // Função para carregar os CEPs do arquivo JSON
  useEffect(() => {
    const loadCeps = async () => {
      const response = await fetch('/ceps.json');
      const data = await response.json();
      setCepsVitoria(data);
    };
    
    loadCeps();
  }, []);

  const calcularFrete = (e) => {
    e.preventDefault();
    
    // Validar se os CEPs são válidos
    if (!cepsVitoria[cepOrigem] || !cepsVitoria[cepDestino]) {
      alert("Por favor, insira CEPs válidos de Vitória, ES.");
      return;
    }

    // Calcular a distância entre os CEPs (simulado)
    const distancia = Math.abs(cepsVitoria[cepDestino].distancia - cepsVitoria[cepOrigem].distancia);

    // Simulação de cálculo do frete
    const taxaPorKg = 5; // Exemplo de taxa por kg
    const taxaPorDistancia = 2; // Exemplo de taxa por km

    // Cálculo do custo do frete com base no peso e distância
    const custoFrete = (peso * taxaPorKg) + (distancia * taxaPorDistancia);
    setPrecoFrete(custoFrete.toFixed(2));
    setSolicitarFrete(false); // Resetar a opção de solicitar
  };

  const handleSolicitar = () => {
    // Redirecionar para a tela de solicitação de frete
    navigate("/solicitacao-frete");
  };

  return (
    <div className="container mt-5">
      <Card className="calculo-frete-form shadow p-4" style={{ width: '400px' }}>
        <h4 className="text-center">Cálculo de Frete</h4>
        <Form onSubmit={calcularFrete}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="CEP de Origem"
              value={cepOrigem}
              onChange={(e) => setCepOrigem(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="CEP de Destino"
              value={cepDestino}
              onChange={(e) => setCepDestino(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Peso (kg)"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Calcular Frete
          </Button>
        </Form>

        {precoFrete !== null && (
          <Card className="mt-4 p-3 text-center">
            <Alert variant="info">
              O preço do frete é: R$ {precoFrete}
            </Alert>
            <p>Deseja solicitar o frete?</p>
            <div className="d-flex justify-content-between">
              <Button variant="success" onClick={handleSolicitar}>
                Sim
              </Button>
              <Button variant="danger" onClick={() => setPrecoFrete(null)}>
                Não
              </Button>
            </div>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default CalculoFrete;
