import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import TextInput from "./TextInput";
import Button from "./Button";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  z-index: 1;
`;

const IputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

interface Props {
  onAdd: (toDo: string) => void;
}

const ToDoInput = ({ onAdd }: Props) => {
  const [toDo, setToDo] = useState("");

  const onAddTodo = () => {
    if (toDo === "") return;
    onAdd(toDo);
    setToDo("");
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title label="Add To Do" />
        <IputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button lable="Add" color="#7ad3ff" onClick={onAddTodo} />
        </IputContainer>
      </Contents>
    </Container>
  );
};

export default ToDoInput;
