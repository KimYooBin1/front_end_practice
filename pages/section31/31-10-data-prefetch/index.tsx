import { useQuery, gql, useApolloClient } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { debounce } from "lodash";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
    }
  }
`;

export default function Prefetch(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  console.log(data);
  const client = useApolloClient();
  const preFetchBoard = (boardId: string) =>
    debounce(async () => {
      console.log("1");
      await client.query({
        query: FETCH_BOARD,
        variables: {
          boardId,
        },
      });
    }, 1000);
  const router = useRouter();
  const onClickMove = (boardId: string) => (): void => {
    void router.push(`/section31/31-10-data-prefetch-moved/${boardId}`);
  };

  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span
              style={{ margin: "10px" }}
              onMouseOver={preFetchBoard(el._id)}
              onClick={onClickMove(el._id)}
            >
              {el.title}
            </span>
            <span style={{ margin: "10px" }}>{el.contents}</span>
          </div>
        ))}
      </div>
    </>
  );
}
