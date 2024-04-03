import "./App.css";
import Viewer from "./components/Viewer";
// 상태변화값이 필요한 경우 무조건 useState!
import { useState } from "react";
// [초기값, 초기값을 컨트롤할 수 있는 제어값 ] = useState



function App() {
  const [number, setNumber] = useState(0);
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div className="App">
      <h2>{number}</h2>
      <Viewer number={number} />
      {/* number = key / {number} = props */}
      <div>
        <button onClick={onDecrease}>➖</button>
        <button onClick={onIncrease}>➕</button>
      </div>
    </div>
  );
}

export default App;
