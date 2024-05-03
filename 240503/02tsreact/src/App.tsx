import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import DataView from "./components/DataView";
import ToDoInput from "./components/ToDoInput";
import Button from "./components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eeeeee;
`;

const ShowInputButton = styled.div`
  position: absolute;
  z-index: 1;
  right: 40px;
  bottom: 40px;
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDolist, setToDoList] = useState([
    "react 공부하기",
    "TS 공부하기",
    "JS 공부하기",
  ]);

  // showToDoInput => 처음에 나타나게함
  const [showToDoInput, setShowToDoInut] = useState(true);
  // todolist를 추가하게함
  const onAdd = (toDo: string) => {
    if (toDo === "") return;
    setToDoList([toDo, ...toDolist]);
    setToDo("");
    // setShowToDoInut를 안보이게함
    setShowToDoInut(false);
  };

  const onDelete = (todo: string) => {
    setToDoList(toDolist.filter((item) => item !== todo));
  };
  return (
    <Container>
      <DataView toDoList={toDolist} onDelete={onDelete} />

      {showToDoInput && <ToDoInput onAdd={onAdd} />}
      <ShowInputButton>
        {/* 첫 화면에서 버튼이 닫기로 되고, list를 추가하게되면 Add To Do로 변경 */}
        <Button
          lable={showToDoInput ? "Close" : "Add To Do"}
          color={showToDoInput ? undefined : "#7ad3ff"}
          // list 추가창이 없는 화면 flase 인상태 -> 버튼을 누르면 list창을 보이고 닫게함 
          onClick={() => setShowToDoInut(!showToDoInput)}
        />
      </ShowInputButton>
    </Container>
  );
}

export default App;
