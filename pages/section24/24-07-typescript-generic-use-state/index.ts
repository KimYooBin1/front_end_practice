//제공자
export function useState<S>(초기값: S): [S, (변경값: S) => void] {
  let state = 초기값;
  const setState = (변경값: S): void => {
    console.log(`${state}에서${변경값}으로 변경됬습니다`);
  };
  return [state, setState];
}

//사용자
const [count, setCount] = useState(10);
