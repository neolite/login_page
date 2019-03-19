import React from "react";
import styled from "styled-components";

const Button = styled.button`
  outline: none;
  tap-highlight-color: none;
  border: 0;
  position: relative;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 3px;
  line-height: 1em;
  padding: 4px 10px 5px;
  color: ${props => (props.blue ? "white" : "black")};
  background: ${props => (props.blue ? "#362d90" : null)};

  :disabled {
    opacity: 0.7;
    cursor: default;
    pointer-events: none;
  }
`;

export default Button;
