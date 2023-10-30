import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;

const DELETE = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function PaginationNextPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE);
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickDelete = (boardId: string) => (): void => {
    void deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        console.log(data);
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              console.log(prev);
              const deletedId = data.deleteBoard;
              const fillterdPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              );
              return [...fillterdPrev];
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    void 나의함수({
      variables: {
        createBoardInput: {
          writer: "영12희",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        console.log(data);
        // 캐시를 수정한다는 뜻의 cache.modify
        cache.modify({
          // 캐시에있는 어떤 필드를 수정할 것 인지 key-value 형태로 적어줍니다.
          fields: {
            fetchBoards: (prev) => {
              console.log(prev);
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };
  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
