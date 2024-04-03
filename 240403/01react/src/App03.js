import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer01 from "./components/Viewer01";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);
  // console.log(didMountRef);
  const handleSetConunt = (value) => {
    setCount(count + value);
  };
  useEffect(() => {
    //   console.log(" 업데이트: ", count, text);
    // }, [count, text]);
    // 만약, 의존성 배열을 설정하지 않은 경우, 컴포넌트가  랜더링 될 때마다 콜백함수를 실행
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });
  // 의존성 배열에 빈배열을 적용하는 경우 / 컴포넌트 마운트 X
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}></input>
      </section>
      <section>
        <Viewer01 count={count} />
      </section>
      <section>
        <Controller handleSetConunt={handleSetConunt} />
      </section>
    </div>
  );
}

export default App;
