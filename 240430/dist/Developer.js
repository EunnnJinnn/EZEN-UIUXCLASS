// 추상클래스
// 추상 : 여러개의 사물이나 개념의 공통적인 요소를 추출해서 만들어내는 개념
// 공통적인 속성을 가지고 있는 서로다른 요소의 객체를 만들어야 하는 경우
// 단, 추상클래스가 되려면 반드시 공통적인 속성 및 메서드가 1개 이상 존재
// = 추상컨셉의 속성 및 메서드가 1개 이상
class Developer {
    drink() {
        console.log("drink");
    }
}
class FrontEndDeveloper extends Developer {
    coding() {
        console.log("develop");
    }
    design() {
        console.log("design");
    }
}
const dev = new FrontEndDeveloper();
dev.coding();
export {};
//# sourceMappingURL=Developer.js.map