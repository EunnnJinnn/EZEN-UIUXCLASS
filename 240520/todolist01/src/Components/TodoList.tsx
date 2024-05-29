import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState, Categories } from "./atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  // 카테고리스테이 값을 찾아서 카테고리에 넣고 셑카테고리에서 수정 가능하게
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  // console.log(category);
  return (
    <div>
      <h1>⭐✨ To Do List ✨⭐</h1>
      <hr />
      <CreateTodo />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>ToDo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      {toDos?.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default TodoList;
