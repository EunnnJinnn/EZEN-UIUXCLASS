import React from "react";
import styled from "styled-components";

const Label = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #58a6e2;
`;

// 외부에서 라벨값을 수정하지 못하게 함 :readonly
interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return <Label>{label}</Label>;
};

export default Title;
