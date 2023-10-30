import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPAge() {
  const { data } = useQuery(FETCH_BOARDS);
  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다`);
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el?.writer} onClick={onClickAlert}>
          <span>
            <input type="checkbox"></input>
          </span>
          <span style={{ margin: "10px" }}>{el?.number}</span>
          <span style={{ margin: "10px" }}>{el?.title}</span>
          <span style={{ margin: "10px" }}>{el?.writer}</span>
        </div>
      ))}
    </div>
  );
}
