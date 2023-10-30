//1. hof - 일반함수
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result6 = first("영희")(8);

//1. hof - 일반함수
//prettier-ignore
const first1 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const result7 = first("영희")(8);

//1. hof - 일반함수
//prettier-ignore
const 로그인체크 = <T>(Component: T) => <U>(props: U): [T, U] => {
    return [Component, props];
  };

const result8 = 로그인체크("영희")(8);
