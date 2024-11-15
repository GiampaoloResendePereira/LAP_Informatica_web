import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // para ocupar a altura total da tela
        backgroundColor: "#f5f5f5", // opcional, para uma cor de fundo suave
      }}
    >
      <div className="login-container"
        style={{
          padding: "20px",
          width: "80%", // Define a largura como 80% da tela
          maxWidth: "600px", // Limita a largura máxima a 600px
          margin: "0 auto",
          textAlign: "center",
          background: "#f0f0f0", // Cinza clarinho
        }}>
        <h2>Login</h2>
        <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Senha:
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Digite sua senha"
            />
          </div>
        <button
          type="submit"
          className="btn btn-danger"
          style={{ padding: "10px", marginTop: "10px" }}
          onClick={handleLogin}
        >
          Entrar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => navigate("/signup")}
          style={{ padding: "10px" }}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Login;
