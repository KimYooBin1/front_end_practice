import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationNextPage() {
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });

  return (
    <>
      <div>
        {(data?.fetchBoards ?? new Array(10).fill(1)).map((el: any) => (
          <div key={el._id} style={{ height: "30px" }}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <div>123</div>
    </>
  );
}
