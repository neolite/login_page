import React, { createContext, useReducer } from "react";
import { SET_USER } from "../constants";

const initialState = { user: null };

export const UserContext = createContext(initialState);

let reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return;
  }
};

export const UserProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
