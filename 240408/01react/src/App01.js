import { useState } from "react";
import Box from "./Components/Box";
import "./App01.css";
// import { useState } from "react";

// 가위, 바위, 보 데이터 관리
const choice = {
  scissors: {
    name: "scissors",
    img: "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/4218372391/B.jpg?912000000",
  },
  rock: {
    name: "rock",
    img: "https://i.namu.wiki/i/vA4uUGBgyBSiJ7QylLXYMSpEfSeqFTef4RzuxjGjCw-cBxxnaRzAPRZ5brdg06s5CsUKM7t1W3NGkfAHETduPg.webp",
  },
  paper: {
    name: "paper",
    img: "https://i0.wp.com/naverstop.com/wp-content/uploads/2023/11/20231129_003249.jpg?fit=706%2C434&ssl=1",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [computerSelect, setComputerSelect] = useState("");
  const [result, setResult] = useState("");

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  const judegement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  const play = (item) => {
    setUserSelect(choice[item]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judegement(choice[item], computerChoice));
  };
  return (
    <div className="container">
      <h1>🏁가위 바위 보 시작🏁</h1>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>✌🏻</button>
        <button onClick={() => play("rock")}>✊🏻</button>
        <button onClick={() => play("paper")}>🖐🏻</button>
      </div>
    </div>
  );
}

export default App;
