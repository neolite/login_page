import styled from "styled-components";

const Link = styled.span`
  color: #362d90;
  cursor: pointer;
  position: absolute;
  bottom: 9px;
  font-size: 14px;
  right: 10px;

  :active {
    color: #b00;
    opacity: 0.7;
  }

  :hover {
    color: #b00;
  }
`;

export default Link;
