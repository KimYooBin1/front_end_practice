import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = []; //전역변수라 rerender 되더라도 qqq 는 기억되어진다.

export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src = "강아지.png";
    img.onload = () => {
      qqq.push(img);
    };
  });

  const onClickMoved = () => {
    router.push("/section31/31-09-image-preload-moved");
  };
  return (
    <>
      <button onClick={onClickMoved}>페이지 이동하기</button>
    </>
  );
}
