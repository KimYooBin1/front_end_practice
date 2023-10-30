import { memo } from "react";

interface IWordProps {
  el: string;
}

function Word(props: IWordProps): JSX.Element {
  console.log(props.el);
  console.log("자식이 렌더링 됩니다");
  return (
    <>
      <span>{props.el}</span>
    </>
  );
}
export default memo(Word);
