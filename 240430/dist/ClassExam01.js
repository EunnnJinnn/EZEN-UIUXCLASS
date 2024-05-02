class Employee {
    // 필드
    name; // 자동으로 public 접근제어자
    age; // 자동으로 public 접근제어자
    position; // 자동으로 public 접근제어자
    // 생성자 함수
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("열심히 일함");
    }
}
const EmployeeA = new Employee("짱구", 22, "대리");
EmployeeA.work();
EmployeeA.name = "명탐정 코난";
EmployeeA.age = 26;
EmployeeA.position = "탐정";
console.log(EmployeeA);
// 상속 = extends : 부모요소로부터 값을 받을 수 있다는 전제를 설정하는것, 반드시 상속받은 값을 구현해야할 의무X
class ExecutiveOfficer extends Employee {
    // 필드 값은 변함없이 그대로 상속
    // super() 사용X, 메서드만 추가
    func() {
        console.log(`${this.name}`);
        console.log(`${this.age}`);
    }
}
export {};
// TS 접근제어자
// public : 모든 범위에서 접근할 수 있는 제어자 설정(*class를 기본 세팅된 default 제어자)
// private : 클래스 내부 범위에서만 접근할 수 있는 제어자 설정
// protected : 클래스 내부 + 상속받은 파생 클래스에서만 접근할 수 있는 제어자 설정
//# sourceMappingURL=ClassExam01.js.map