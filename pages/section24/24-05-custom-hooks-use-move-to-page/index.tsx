import { useRouter } from "next/router";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseAuthPage(): JSX.Element {
  // useAuth();
  const { visitedPage, onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/markets")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypages")}>
        마이페이지으로 이동
      </button>
    </>
  );
}
