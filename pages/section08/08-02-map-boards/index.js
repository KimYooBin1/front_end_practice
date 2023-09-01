import { useQuery, gql } from "@apollo/client";

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
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div>
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
