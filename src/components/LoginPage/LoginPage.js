import React, { useContext } from "react";
import get from "lodash/get";

import { UserContext } from "../../context/user";
import LoginForm from "../LoginForm/LoginForm";
import UserProfile from "../UserProfile/UserProfile";

const LoginPage = () => {
  const { state } = useContext(UserContext);
  return get(state, "user") ? <UserProfile user={state.user} /> : <LoginForm />;
};

export default LoginPage;
