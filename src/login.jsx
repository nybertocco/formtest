import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    console.log("E-mail:", email);
    console.log("Senha:", senha);

    navigate("/formtest/menu");
  };

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <h1 className="h1-login">Antes de entrar, faça seu login!</h1>
      <div className="register-login">
        <label className="label-login" htmlFor="email">
          Email
        </label>
        <input
          className="input-login"
          type="email"
          placeholder="Digite seu E-mail"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="register-login">
        <label className="label-login" htmlFor="senha">
          Senha
        </label>
        <input
          className="input-login"
          type="password"
          placeholder="Digite sua senha"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>

      <button className="button-login" type="submit">
        Entrar
      </button>

      <p className="p-login">
        <Link to="/formtest/">Voltar para tela de cadastro</Link>
      </p>
    </form>
  );
}
