import styled from "styled-components";

const Input = styled.input`
  box-shadow: none;
  -webkit-appearance: none;
  outline: none;
  box-sizing: border-box;
  background: none;
  display: block;
  width: 100%;
  height: 34px;
  font-size: 14px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  transition: border-color 0.2s;
  padding: 0 10px 2px;
  background: #fff;
  :disabled {
    background: #f8f8f8;
    color: #000;
    -webkit-text-fill-color: #000;
    -webkit-opacity: 1;
    opacity: 1;
  }
`;

export default Input;
