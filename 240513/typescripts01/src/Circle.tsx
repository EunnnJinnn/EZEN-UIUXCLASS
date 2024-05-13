import React, { useState } from "react";
import { styled } from "styled-components";

/* <ContainerProps> 제네릭 형식으로 타입 변수를 정리를 함  */
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 8px solid ${(props) => props.borderColor};
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  text?: string;
}

// ? 옵셔널프로퍼티값
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  // useState<number | string>(1); => 유니온타입:합집합
  const [counter, setCounter] = useState<number | string>(1);
  setCounter("hello");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  // 단락회로평가 : borderColor 좌항의 존재하면 borderColor  ?? 그렇지않으면 bgColor를 넣어라
};

export default Circle;
