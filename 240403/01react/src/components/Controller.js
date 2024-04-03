const Controller = ({handleSetConunt}) => {
  return (
    <div>
      <button onClick={() => handleSetConunt(-1)}>-1</button>
      <button onClick={() => handleSetConunt(-10)}>-10</button>
      <button onClick={() => handleSetConunt(-100)}>-100</button>
      <button onClick={() => handleSetConunt(100)}>+100</button>
      <button onClick={() => handleSetConunt(10)}>+10</button>
      <button onClick={() => handleSetConunt(1)}>+1</button>
    </div>
  );
};

export default Controller;
