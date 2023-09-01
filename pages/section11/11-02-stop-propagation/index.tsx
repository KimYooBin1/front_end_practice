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
  const a1 = () => {
    alert("1");
  };
  const a2 = () => {
    alert("2");
  };
  const a3 = (event: any) => {
    event.stopPropagation();
    alert("3");
  };
  const a4 = (event: any) => {
    event.stopPropagation();
    alert("4");
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el?.writer} onClick={a1}>
          <span onClick={a2}>
            <input type="checkbox" onClick={a3}></input>
          </span>
          <span onClick={a4} style={{ margin: "10px" }}>
            {el?.number}
          </span>
          <span style={{ margin: "10px" }}>{el?.title}</span>
          <span style={{ margin: "10px" }}>{el?.writer}</span>
        </div>
      ))}
    </div>
  );
}
