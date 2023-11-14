import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );
  return (
    <>
      <div>{router.query.boardId}번 게시글</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      <div
        dangerouslySetInnerHTML={{
          __html: "<script>alert(\"1\")</script>",
        }}
      ></div>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: "<script>const aaa = localStorage.getItem(\"accessToken\"); alert(aaa)</script>",
        }}
      ></div> */}
      
      {/* <img src="c" onError={alert("123")} /> */}
    </>
  );
}
