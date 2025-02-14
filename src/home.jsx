import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [telefone, setTelefone] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    if (!telefone || !emailCadastro || !senhaCadastro) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    console.log("Telefone:", telefone);
    console.log("E-mail:", emailCadastro);
    console.log("Senha:", senhaCadastro);

    navigate("/formtest/menu");
  };

  return (
    <form className="form-home" onSubmit={handleCadastro}>
      <h1 className="h1-home">Não tem uma conta? Cadastre-se agora!</h1>

      <div className="register-home">
        <label className="label-home" htmlFor="telefone">
          Telefone
        </label>
        <input
          className="input-home"
          type="tel"
          placeholder="+55 (11) 123456789"
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>

      <div className="register-home">
        <label className="label-home" htmlFor="emailCadastro">
          E-mail
        </label>
        <input
          className="input-home"
          type="email"
          placeholder="Digite seu E-mail"
          id="emailCadastro"
          value={emailCadastro}
          onChange={(e) => setEmailCadastro(e.target.value)}
          required
        />
      </div>

      <div className="register-home">
        <label className="label-home" htmlFor="senhaCadastro">
          Senha
        </label>
        <input
          className="input-home"
          type="password"
          placeholder="Digite sua senha"
          id="senhaCadastro"
          value={senhaCadastro}
          onChange={(e) => setSenhaCadastro(e.target.value)}
          required
        />
      </div>

      <button className="button-home" type="submit">
        Cadastrar
      </button>

      <p className="p-home">
        <Link to="/formtest/login">Já tem conta? Clique aqui</Link>
      </p>
    </form>
  );
}
