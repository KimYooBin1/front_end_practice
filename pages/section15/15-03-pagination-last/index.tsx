import { useQuery, gql } from "@apollo/client";
import { useState, type MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovedPAge() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
  console.log(lastPage);
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
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
      console.log(startPage);
    }
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
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: "5px" }}
            >
              {index + startPage}
            </span>
          ),
      )}
      <span onClick={onClickNextPage}>{">"}</span>
    </div>
  );
}
