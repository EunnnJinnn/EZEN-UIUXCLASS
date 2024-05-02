class Character {
    name;
    moveSpeed;
    extra;
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
const CharacterA = new Character("흰둥이", 50, "test");
CharacterA.move();
export {};
//# sourceMappingURL=ClassExam02.js.map