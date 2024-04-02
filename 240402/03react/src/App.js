import "./App.css";
import { useState } from "react";

// function App() {
// const [date, setDate] = useState("");
// const handleOnChange = (e) => {
//   setDate(e.target.value);
// };
// return (
//   <div>
//     <input type="date" onChange={handleOnChange} />
//   </div>
// );
// }

// function App() {
//   const [option, setOption] = useState("");
//   const handleOnChange = (e) => {
//     console.log(e.target.value);
//     setOption(e.target.value);
//   };
//   return (
//     <div>
//       <select onChange={handleOnChange}>
//         <option key={"1번"}>1번</option>
//         <option key={"2번"}>2번</option>
//         <option key={"3번"}>3번</option>
//       </select>
//     </div>
//   );
// }

function App() {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div>
        <input
          name="name"
          value={state.name}
          placeholder="이름"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <select value={state.gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"여성"}>여성</option>
          <option key={"남성"}>남성</option>
        </select>
      </div>
      <div>
        <input value={state.birth} type="date" onChange={handleOnChange} />
      </div>
      <div>
        <textarea value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default App;
