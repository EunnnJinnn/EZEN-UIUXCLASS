interface CharaterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharaterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

const CharacterA = new Character("흰둥이", 50, "test");
CharacterA.move();
