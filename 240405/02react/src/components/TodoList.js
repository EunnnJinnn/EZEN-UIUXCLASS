import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todo } = useContext(TodoStateContext);
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
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="TodoList">
      <h4>📑 Todo List 📑</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>끝낸 일 : {doneCount} </div>
        <div>당장 끝내야 할 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력하세요."
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
// {
//   /* map 함수 : 앞에 새로운 배열로 만들때 사용 */
// }

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;
