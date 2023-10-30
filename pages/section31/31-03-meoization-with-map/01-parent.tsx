import { useState } from "react";
import Word from "./01-child";
import { v4 as uuidv4 } from "uuid";
export default function MemoizationWithMapParentPage(): JSX.Element {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다");
  const onClickChange = (): void => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다");
  };
  return (
    <>
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} /> //1. memo 시, key또는 el 이 변경된 부분만 리렌더링된다(즉, "오늘", "먹었습니다"는 제외!!)
      ))} */}
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} /> //uuid 는 key가 계속 바뀌기 때문에 memo의 의미가 없다
      ))}

      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
