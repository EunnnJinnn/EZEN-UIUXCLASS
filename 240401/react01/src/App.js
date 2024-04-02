import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//------- 클래스형태의 함수형 컴포넌트 ----------
// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   )
// }

//------ 화살표함수 형태의 함수형 컴포넌트 -------
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
