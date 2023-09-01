import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterLetDocumentPage(): JSX.Element {
  const [N, setNumber] = useState(0);
  function onClickCount(): void {
    setNumber((prev: number) => prev + 1);
  }
  return (
    <div>
      <Child1 N={N} setNumber={setNumber} />
      <Child2 N={N} onClickCount={onClickCount} />
    </div>
  );
}
