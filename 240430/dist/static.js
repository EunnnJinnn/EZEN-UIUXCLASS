class A {
    static initValue = 1;
}
// class를 객체를 생성하기 위한 하나의 프로토타입
// class도 객체?
// class 내부에 존재하는 속성, 메서드를 활용해서 바까
// 원칙적으로 class 내부에 존재하는 속성 , 메서드를 바깥에서 사용하려면 인스턴스 객체를 생성한 이후에 해당 인스턴스 속성 값을 활용해서 사용하는 것이 문법적으로 맞음
// static : 정적인 <-> interactive : 동적인
const initVal = A.initValue;
console.log(initVal);
export {};
//# sourceMappingURL=static.js.map