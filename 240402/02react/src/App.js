import "./App.css";
import { useState } from "react";

function App() {
  console.log("Update!");
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={onIncrease}>➕</button>
    </div>
  );
}

export default App;
