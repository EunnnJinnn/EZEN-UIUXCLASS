import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: ${(props) => props.color};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;

  &:hover {
    background: ${(props) => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  lable: string;
  onClick?: () => void;
  color?: string;
}

const Button = ({ lable, onClick, color = "#ff93ae" }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {lable}
    </Container>
  );
};

export default Button;
