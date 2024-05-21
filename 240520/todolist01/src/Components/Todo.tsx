import React from "react";
import { IToDo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

// React에서는 가상 DOM을 사용하다 보니, target보다는 currentTarget으로 값을 찾아오는 것이 보다 효율적

// 지금 아래 보이는 food라는 배열에서 mango를 빼고, 그 자리에 gim 을 넣어라!
const food = ["pizza", "mango", "kimchi", "kimbab"];
const front = ["pizza"];
const back = ["kimchi", "kimbab"];
const final = [...front, "gim", ...back];
console.log(final);

const Todo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, category: name, id };
      console.log(oldToDo, newToDo);
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
