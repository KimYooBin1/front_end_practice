import { useQuery, gql } from "@apollo/client";

const FETCH_NODE = gql`
  query {
    fetchBoard(number: 4) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPAge() {
  const { data } = useQuery(FETCH_NODE);
  console.log(data);
  return (
    <div>
      <div>1번페이지 이동이 완료되었습니다!!</div>
      <div>{data?.fetchBoard.number}</div>
      <div>{data?.fetchBoard.writer}</div>
      <div>{data?.fetchBoard.title}</div>
      <div>{data?.fetchBoard.contents}</div>
    </div>
  );
}
