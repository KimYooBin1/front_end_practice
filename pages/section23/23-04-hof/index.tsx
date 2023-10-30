import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";

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
  const [search, setSearch] = useState("");
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });

  const onClickPage =
    (page: number) => (event: MouseEvent<HTMLSpanElement>) => {
      void refetch({ page: 1, search });
      refetch({ page });
    };

  return (
    <div>
      {data?.fetchBoards?.map((el: any) => (
        <div key={el._id}>
          {el.title} {el.writer}
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span onClick={onClickPage(index + startPage)} key={index + startPage}>
          {` ${index + startPage} `}
        </span>
      ))}
    </div>
  );
}
