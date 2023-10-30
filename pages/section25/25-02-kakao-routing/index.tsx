import Link from "next/link";
import { useRouter } from "next/router";

export default function KakoMapPage() {
  const router = useRouter();
  const onClickBtn = (): void => {
    void router.push("/section25/25-02-kakao-routing-moved");
  };
  return (
    <>
      {/* {MPA 처음 로딩때 모든 페이지를 받아들이기 때문에 로딩이 너무 빨라 kakao 에서 오류가 생긴다} */}
      <button onClick={onClickBtn}>페이지 이동하기!!!</button>
      {/* {매 페이지를 새로 다운로드 받으므로 SPA 활용 못함} */}
      <a href="/section25/25-02-kakao-routing-moved">페이지 이동하기!!!</a>

      {/* {next 에서 제공하는 a 태그 이므로 SPA활용가능 + <a>를 써서 검색 좋아짐}  */}
      <Link href="/section25/25-02-kakao-routing-moved">
        <a>페이지 이동하기!!!</a>
      </Link>
    </>
  );
}
