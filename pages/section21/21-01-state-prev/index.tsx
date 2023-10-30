import { useState } from "react";

export default function StatePrev(): JSX.Element {
  const [count, setCount] = useState(0);
  const onClickUp = (): void => {
    //1. 화살표 함수
    setCount(function (prev) {
      return prev + 1;
    });
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickUp}>카운트 올리기</button>
    </>
  );
}
