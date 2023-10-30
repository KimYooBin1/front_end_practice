import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function PaginationNextPage() {
  const { data } = useQuery(FETCH_BOARDS);
  return (
    <div>
      {/* {data?.fetchBoards?.map((el: any) => (
        <div key={el._id}>
          {el.title} {el.writer}
        </div>
      ))} */}
    </div>
  );
}
