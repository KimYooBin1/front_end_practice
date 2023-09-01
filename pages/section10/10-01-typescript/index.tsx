export default function TypeScriptPage() {
  let aaa: (number | string)[] = [1, 2, 3, "asdf"];

  interface a {
    name: string;
    age: number | string;
    hobby?: string;
  }

  let bbb: a = { name: "123", age: "1살" };

  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원");

  //any type == js
  let qqq: any = "철수";
  qqq = 1;
  qqq = "q";
  qqq = true;
  qqq = [];
  qqq = {};
  return <></>;
}
