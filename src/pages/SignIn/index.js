import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarberWeb" />
      <form>
        <input type="email" placeholder="Seu E-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuíta</Link>
      </form>
    </>
  );
}
