import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [N, setNumber] = useState(0);
  function onClickCountUp() {
    setNumber(N + 1);
  }

  function onClickCountDown() {
    setNumber(N - 1);
  }

  return (
    <div>
      <div>{N}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
    </div>
  );
}
