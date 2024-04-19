import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({
      type: "INCREMENT",
      // payload 입력값으로 움직이는 매개변수
      payload: { num: 5 },
    });
  };

  const decrease = () => {
    dispatch({
      type: "DECREMENT",
      payload: { num: 5 },
    });
  };

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: { id: "dmswls", password: "1234" },
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: { id: "", password: "" },
    });
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={decrease}>감소하기</button>
      <button onClick={increase}>증가하기</button>
      <Box />
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
      <h1>
        {id}
        {password}
      </h1>
    </div>
  );
}

export default App;
