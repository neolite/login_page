import React, { useState, useCallback } from "react";
import styled from "styled-components";

import BigButton from "../Buttons/BigButton";
import Input from "../Input/Input";
import Link from "../Link/Link";

const FormDiv = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0 5px 25px hsla(0, 0%, 84.3%, 0.5);
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  font-size: 14px;
  border-radius: 3px;
  margin: 100px auto auto;
  max-width: 342px;
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
`;

const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-family: Tahoma, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1.25em;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  display: block;
  margin: 15px 0 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  color: #000;
  padding-bottom: 5px;
`;

const FormTopBlock = styled.div`
  padding-bottom: 5px;
`;

const FormBottomBlock = styled.div`
  position: relative;
  border-top: 2px solid #e0e0e0;
  margin: 0 -12px;
  padding: 15px 12px 23px;
`;

const ErrorSpan = styled.span`
  color: #b00;
  display: block;
  padding: 3px 0 0;
`;

const LoginForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = evt => {
    evt.preventDefault();
    console.log(login, password);
  };

  const remindPassword = useCallback(() => {
    if (login.length < 3) {
      setError(true);
      setErrorMessage("Введите эл. почту или телефон");
      return;
    }
  }, [login]);

  return (
    <FormDiv>
      <form>
        <FormTopBlock>
          <HeaderTitle>Вход</HeaderTitle>
          <FormRow>
            <FormLabel>Эл. почта или телефон</FormLabel>
            <Input value={login} onChange={evt => setLogin(evt.target.value)} />
          </FormRow>
          <FormRow>
            <FormLabel>Пароль</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={evt => setPassword(evt.target.value)}
            />
            <Link onClick={remindPassword}>Напомнить</Link>
          </FormRow>
        </FormTopBlock>
        <FormBottomBlock>
          <BigButton
            blue
            disabled={!(login.length || password.length)}
            onClick={loginUser}
          >
            Войти на площадку
          </BigButton>
          {error && <ErrorSpan>{errorMessage}</ErrorSpan>}
        </FormBottomBlock>
      </form>
    </FormDiv>
  );
};

export default LoginForm;
