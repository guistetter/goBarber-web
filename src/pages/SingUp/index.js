import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import logo from "../../assets/logo.svg";
const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatorio"),
  email: Yup.string()
    .email("Insira um email válido")
    .required("O Email é obrigatorio"),
  password: Yup.string()
    .min(6, "A senha precisa ter 6 caractes no mínimo")
    .required("A senha é obrigatória"),
});
export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
    console.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarberWeb" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
