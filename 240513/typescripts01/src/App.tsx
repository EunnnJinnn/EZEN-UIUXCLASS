import React from "react";
import {styled} from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="pink" bgColor="powderblue" />
      <Circle text="Im here" bgColor="pink" />
    </div>
  );
}

export default App;
