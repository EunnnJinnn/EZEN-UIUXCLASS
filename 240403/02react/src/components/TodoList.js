import { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  // 검색어  기능
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
    // toLowerCase() : 소문자로 받아오기
  };
  return (
    <div className="TodoList">
      <h4>📑 Todo List 📑</h4>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력하세요."
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
{
  /* map 함수 : 앞에 새로운 배열로 만들때 사용 */
}

export default TodoList;
