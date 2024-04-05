import { useReducer } from "react";
import "./TestComp.css";
// import { type } from "@testing-library/user-event/dist/type";

// 상태관리를 위한 함수 useReducer => 컴포넌트 밖에서 사용

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "INIT":
      return 0;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
};

// dispatch() : 상태변화 감지 함수 => 값을 reducer에게 토스
// useReducer(매개변수, 0)
const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div className="buttons">
        <button
          onClick={() =>
            dispatch({
              type: "INCREASE",
              data: 1,
            })
          }
        >
          ➕
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "INIT",
            })
          }
        >
          👽
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "DECREASE",
              data: 1,
            })
          }
        >
          ➖
        </button>
      </div>
    </div>
  );
};

export default TestComp;
