import "./Body.css";

// props = 객체 구조분해 할당 => 이름이 같아야함
const Body = ({ name, location, favorList }) => {
  // const { name, location } = props;
  return (
    <div>
      <h1>
        {name}은 {location}에 거주하고,
        <br />
        {name}은 {favorList.length}개의 최애 음식은
        <br />
        {favorList[0]}, {favorList[1]}, {favorList[2]} 입니다.
      </h1>
    </div>
  );
};
// -------- 기본값 설정 ----------

Body.defaultProps = {
  favorList: ["조개구이", "순대", "오징어"],
};

// 모듈화 시켜줌
export default Body;
