import { useCallback, useMemo, useState } from "react";

export default function MemorizationPage(): JSX.Element {
  const aaa = useMemo(() => {
    //useMemo 를 사용하면 리렌더링이 되더라고 값이 저장된다
    return Math.random();
  }, []);
  console.log(aaa);
  console.log("리렌더링");
  let countLet = 0;
  const [countState, setCountState] = useState(0);
  //useCallback 으로 함수를 기억한다, 리렌더링시 함수를 다시 로드할 필요가 없다
  const onClickLetButton = useCallback(() => {
    console.log(countLet);
    countLet += 1;
  }, []);

  //usecallback 시 state 사용에 주의해야된다
  const onClickStateButton = useCallback(() => {
    // setCountState(countState + 1); countState 값까지 기억해서 값이 똑같이 나온다
    setCountState((prev) => prev + 1);
  }, []);

  //useMemo 로 useCallback 을 구현할 수 있다
  const onClickStateButton1 = useMemo(
    () => () => {
      // setCountState(countState + 1); countState 값까지 기억해서 값이 똑같이 나온다
      setCountState((prev) => prev + 1);
    },
    []
  );
  return (
    <>
      <div>count(let) : {countLet}</div>
      <button onClick={onClickLetButton}>count(let) + 1</button>

      <div>count(state) : {countState}</div>
      <button onClick={onClickStateButton1}>count(state) + 1</button>

      <div>count(state) : {countState}</div>
      <button
        onClick={useCallback(() => {
          setCountState((prev) => prev + 1);
        }, [])}
      >
        count(state) + 1
      </button>
    </>
  );
}
