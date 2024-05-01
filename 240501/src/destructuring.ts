// 객체 = interface , 함수 = type
interface IPerson {
  name: string;
  age: number;
}

const printPerson = ({ name, age }: IPerson): void => {
  console.log(`name: ${name}, age: ${age}`);
};

printPerson({ name: "dmswls", age: 25 });
