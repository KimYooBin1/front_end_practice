import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
const FETCH_NODE = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPAge() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_NODE,
    {
      variables: {
        number: Number(router.query.qqq),
      },
    }
  );
  console.log(data);
  return (
    <div>
      <div>{router.query.qqq}번페이지 이동이 완료되었습니다!!</div>
      <div>{data?.fetchBoard?.number}</div>
      <div>{data?.fetchBoard?.writer}</div>
      <div>{data?.fetchBoard?.title}</div>
      <div>{data?.fetchBoard?.contents}</div>
    </div>
  );
}
