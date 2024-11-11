<div>
          <h3>Dados do Remetente</h3>
          {/* Campos para dados do remetente */}
          <div>
            <label>Nome:</label>
            <input
              value={remetente.nome}
              onChange={(e) => setRemetente({ ...remetente, nome: e.target.value })}
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              value={remetente.telefone}
              onChange={(e) => setRemetente({ ...remetente, telefone: e.target.value })}
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              value={remetente.email}
              onChange={(e) => setRemetente({ ...remetente, email: e.target.value })}
            />
          </div>
          <div>
            <label>Logradouro:</label>
            <input
              value={remetente.endereco.logradouro}
              onChange={(e) => setRemetente({ ...remetente, endereco: { ...remetente.endereco, logradouro: e.target.value } })}
            />
          </div>
          <div>
            <label>Bairro:</label>
            <input
              value={remetente.endereco.bairro}
              onChange={(e) => setRemetente({ ...remetente, endereco: { ...remetente.endereco, bairro: e.target.value } })}
            />
          </div>
          <div>
            <label>Número:</label>
            <input
              value={remetente.endereco.numero}
              onChange={(e) => setRemetente({ ...remetente, endereco: { ...remetente.endereco, numero: e.target.value } })}
            />
          </div>
          <div>
            <label>Complemento:</label>
            <input
              value={remetente.endereco.complemento}
              onChange={(e) => setRemetente({ ...remetente, endereco: { ...remetente.endereco, complemento: e.target.value } })}
            />
          </div>

          {/* Formulário para dados do destinatário */}
          <h3>Dados do Destinatário</h3>
          <div>
            <label>Nome:</label>
            <input
              value={destinatario.nome}
              onChange={(e) => setDestinatario({ ...destinatario, nome: e.target.value })}
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              value={destinatario.telefone}
              onChange={(e) => setDestinatario({ ...destinatario, telefone: e.target.value })}
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              value={destinatario.email}
              onChange={(e) => setDestinatario({ ...destinatario, email: e.target.value })}
            />
          </div>
          <div>
            <label>Logradouro:</label>
            <input
              value={destinatario.endereco.logradouro}
              onChange={(e) => setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, logradouro: e.target.value } })}
            />
          </div>
          <div>
            <label>Bairro:</label>
            <input
              value={destinatario.endereco.bairro}
              onChange={(e) => setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, bairro: e.target.value } })}
            />
          </div>
          <div>
            <label>Número:</label>
            <input
              value={destinatario.endereco.numero}
              onChange={(e) => setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, numero: e.target.value } })}
            />
          </div>
          <div>
            <label>Complemento:</label>
            <input
              value={destinatario.endereco.complemento}
              onChange={(e) => setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, complemento: e.target.value } })}
            />
          </div>