import React from "react";

// const Body = () => {
//   // const numA = 1;
//   // const numB = 2;
//   // const strA = "안녕";
//   // const strB = "리액트";
//   // const boolA = true;
//   // const boolB = false;

//   const objA = {
//     a: 1,
//     b: 2,
//   };

//   return (
//     <>
//       <h1>body</h1>
//       {/* <h2>{numA + numB}</h2>  */}
//       {/* <h2>{strA + strB}</h2> */}
//       {/* <h2>{String(boolA || boolB)}</h2> */}
//       <h2>a: {objA.a}</h2>
//       <h2>b: {objA.b}</h2>
//     </>
//   );
// };
// ------------------------------------------------------------------
const Body = () => {
  const num = 19;
  if (num % 2 === 0) {
    return <div>{num}은(는) 짝수입니다.</div>;
  } else {
    return <div>{num}은(는) 홀수입니다.</div>;
  }
};

//{} : 변수로 만들어주는 역할
export default Body;
