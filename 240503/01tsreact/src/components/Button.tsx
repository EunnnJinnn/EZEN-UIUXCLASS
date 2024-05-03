import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: #97d4f1;
  border: none;
  border-radius: 4px;
  padding: 14px 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  onClick: () => void;
}
// 구조분해 할당
const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
