import { useQuery, gql } from "@apollo/client";
import { useState, type MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPAge() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };
  const onClickPrevPage = (): void => {
    if (startPage >= 11) {
      setStartPage(startPage - 10);
      void refetch({ page: startPage - 10 });
    }
  };
  const onClickNextPage = (): void => {
    setStartPage(startPage + 10);
    void refetch({ page: startPage + 10 });
    console.log(startPage);
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el?.title}</span>
          <span style={{ margin: "10px" }}>{el?.writer}</span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>{"<"}</span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          id={String(index + startPage)}
          onClick={onClickPage}
        >
          {index + startPage},
        </span>
      ))}
      <span onClick={onClickNextPage}>{">"}</span>
    </div>
  );
}
