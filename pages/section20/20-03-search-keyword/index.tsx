import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import _ from "lodash";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
    }
  }
`;
import { v4 as uuidv4 } from "uuid";

export default function PaginationNextPage() {
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: 1 });
    refetch({ page: Number(event.currentTarget.id) });
    console.log(event.currentTarget.id);
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
    // setSearch(event.currentTarget.value);
  };
  // const onClickSearch = (): void => {
  //   void refetch({ page: 1, search });
  // };
  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards?.map((el: any) => (
        <div key={el._id}>
          <span>
            {el.title
              .replaceAll(keyword, `!@#${keyword}!@#`)
              .split("!@#")
              .map((el: any) => (
                <>
                  <span
                    key={uuidv4()}
                    style={{ color: el === keyword ? "red" : "black" }}
                  >
                    {el}
                  </span>
                </>
              ))}
          </span>
          <span>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span
          onClick={onClickPage}
          id={String(index + startPage)}
          key={index + startPage}
        >
          {` ${index + startPage} `}
        </span>
      ))}
    </div>
  );
}
