// 데이터를 찾아오는 모듈
import React, { useReducer, useRef, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/Header.js";
import TodoEditor from "./components/TodoEditor.js";
import TodoList from "./components/TodoList.js";

// Context
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

// state funtion
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

// mockup data
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "JS 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "헬스장 가기",
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
    // += : 복합대입연산자
  };

  // 수정 업데이트
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);
  const memoizedDispathes = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={{ todo }}>
        <TodoDispatchContext.Provider value={memoizedDispathes}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
