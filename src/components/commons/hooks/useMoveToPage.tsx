import { useRouter } from "next/router";
import { visitedPageState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
  visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path); //recoil or localstorage를 사용해서 이전 페이지 저장 가능
    localStorage.setItem("visitedPage", path);
    void router.push(path);
  };
  return { visitedPage, onClickMoveToPage };
};
