function Header() {
  // handleOnClick 순수함수 이기때문에 대문자로 시작X
  const handleOnClick = () => {
    alert("왜눌렀어!!👽");
  };
  return (
    <header>
      <h1>header</h1>
      <button onClick={handleOnClick}>💙click!💙</button>
    </header>
  );
}

export default Header;
