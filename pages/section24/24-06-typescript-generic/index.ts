//1.문자/숫자/불린(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

//2.any 타입 => js와 같다, 좋지 않다
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000); //된다
  return [arg3, arg2, arg1];
};

const result1 = getAny("철수", 123, true);

//3.unknown 타입 => js(any)보다는 좋다,
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  //   console.log(arg1 * 1000); //안된다 if(typeof arg1 === number) 조건을 붙여줘야 실행이 된다
  return [arg3, arg2, arg1];
};

const result2 = getUnknown("철수", 123, true);

//3.generic 타입 : 입력값을 최초로 넣는 순간 그 값으로 고정이 된다
function getGeneric<Mytype1, Mytype2, Mytype3>(arg1: Mytype1, arg2: Mytype2, arg3: Mytype3): [Mytype3, Mytype2, Mytype1] {
  return [arg3, arg2, arg1];
}

const result3 = getGeneric<string, number, boolean>("철수", 123, true);

//3.generic 타입 : 입력값을 최초로 넣는 순간 그 값으로 고정이 된다
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result4 = getGeneric2<string, number, boolean>("철수", 123, true);

const getGeneric4 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

const result5 = getGeneric2<string, number, boolean>("철수", 123, true);
