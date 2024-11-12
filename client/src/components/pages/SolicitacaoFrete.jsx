import React, { useState } from "react";

function SolicitacaoFrete() {
  // Estados para dados do remetente e destinatário
  const [remetente, setRemetente] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: {
      logradouro: "",
      bairro: "",
      numero: "",
      complemento: "",
    },
  });

  const [destinatario, setDestinatario] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: {
      logradouro: "",
      bairro: "",
      numero: "",
      complemento: "",
    },
  });

  // Função para enviar a solicitação de frete
  const handleSolicitarFrete = () => {
    // Ações para processar o envio do frete
    console.log("Solicitação enviada:", { remetente, destinatario });
    alert("Solicitação de frete enviada!");
  };

  return (
    <div className="container bg-light p-5">
      {/* Dados do Remetente */}
      <h3 className="bg-dark text-white rounded p-3 mb-4">Dados do Remetente</h3>
      {Object.entries(remetente).map(([key, value]) => (
        typeof value === 'object' ? (
          Object.entries(value).map(([subKey, subValue]) => (
            <div className="mb-3" key={`${key}.${subKey}`}>
              <label className="form-label">{subKey.charAt(0).toUpperCase() + subKey.slice(1)}:</label>
              <input
                className="form-control"
                value={subValue}
                onChange={(e) =>
                  setRemetente({
                    ...remetente,
                    [key]: { ...value, [subKey]: e.target.value },
                  })
                }
              />
            </div>
          ))
        ) : (
          <div className="mb-3" key={key}>
            <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              className="form-control"
              value={value}
              onChange={(e) => setRemetente({ ...remetente, [key]: e.target.value })}
            />
          </div>
        )
      ))}

      {/* Dados do Destinatário */}
      <h3 className="bg-dark text-white rounded p-3 mb-4">Dados do Destinatário</h3>
      {Object.entries(destinatario).map(([key, value]) => (
        typeof value === 'object' ? (
          Object.entries(value).map(([subKey, subValue]) => (
            <div className="mb-3" key={`${key}.${subKey}`}>
              <label className="form-label">{subKey.charAt(0).toUpperCase() + subKey.slice(1)}:</label>
              <input
                className="form-control"
                value={subValue}
                onChange={(e) =>
                  setDestinatario({
                    ...destinatario,
                    [key]: { ...value, [subKey]: e.target.value },
                  })
                }
              />
            </div>
          ))
        ) : (
          <div className="mb-3" key={key}>
            <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              className="form-control"
              value={value}
              onChange={(e) => setDestinatario({ ...destinatario, [key]: e.target.value })}
            />
          </div>
        )
      ))}

      {/* Botão de Solicitação */}
      <button onClick={handleSolicitarFrete} className="btn btn-secondary mt-4">
        Solicitar Frete
      </button>
    </div>
  );
}

export default SolicitacaoFrete;
