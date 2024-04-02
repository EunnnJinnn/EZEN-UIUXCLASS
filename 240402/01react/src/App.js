import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

// App컴포넌트의 자식 컴포넌트 생성
const ChildComp = () => {
  return <div>child component</div>;
};

function App() {
  const BodyProps = {
    name: "Eunjin",
    loaction: "서울시",
    // favorList: ["떡볶이", "김치전", "감자튀김"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Buttons />
      <Footer>
        <ChildComp />
      </Footer>
    </div>
  );
}
// location = props
// 배열과문자열 등 반복 가능한 요소 앞에  ... :전개연산자

export default App;
