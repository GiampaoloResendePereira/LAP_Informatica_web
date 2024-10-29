import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import '../../styles/Relatorios.css'; // Importa o CSS global

function Relatorio() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [feedback, setFeedback] = useState('');
  const [formato, setFormato] = useState('pdf');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !descricao || !data) {
      setFeedback('Por favor, preencha todos os campos.');
      return;
    }

    if (formato === 'pdf') {
      gerarPDF();
    } else if (formato === 'text') {
      gerarTexto();
    }

    setFeedback('Relatório salvo com sucesso!');
    resetForm();
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.text(`Título do Relatório: ${titulo}`, 10, 10);
    doc.text(`Descrição: ${descricao}`, 10, 20);
    doc.text(`Data: ${data}`, 10, 30);
    doc.save('Relatorio.pdf');
  };

  const gerarTexto = () => {
    const texto = `Título do Relatório: ${titulo}\nDescrição: ${descricao}\nData: ${data}`;
    const blob = new Blob([texto], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Relatorio.txt';
    link.click();
  };

  const resetForm = () => {
    setTitulo('');
    setDescricao('');
    setData('');
    setFormato('pdf');
    setFeedback('');
  };

  return (
    <div className="relatorio-container">
      <h4 className="relatorio-title">Enviar Relatório</h4>
      {feedback && <div className="feedback-message">{feedback}</div>}
      <form onSubmit={handleSubmit} className="relatorio-form">
        <div className="form-group">
          <label htmlFor="titulo" className="form-label">Título do Relatório:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao" className="form-label">Descrição:</label>
          <textarea
            id="descricao"
            rows="4"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="data" className="form-label">Data:</label>
          <input
            type="date"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formato" className="form-label">Formato do Relatório:</label>
          <select
            id="formato"
            value={formato}
            onChange={(e) => setFormato(e.target.value)}
          >
            <option value="pdf">PDF</option>
            <option value="text">Texto</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Salvar Relatório</button>
      </form>
    </div>
  );
}

export default Relatorio;
