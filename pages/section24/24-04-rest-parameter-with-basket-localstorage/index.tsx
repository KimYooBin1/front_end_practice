import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

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
  const { data } = useQuery(FETCH_BOARDS);
  const onClickBtn =
    (basket: IBoard) => (event: MouseEvent<HTMLButtonElement>) => {
      const basketIn: IBoard[] = JSON.parse(
        localStorage.getItem("baskets") ?? "[]"
      );
      const tmp = basketIn.filter((el) => el._id === basket._id);
      if (tmp.length >= 1) {
        alert("이미 포함되어 있습니다");
        return;
      }

      const { __typename, ...newBasket } = basket; //basket 에 포함되어 있는 __typename 을 제외한 데이터만 받아와서 new Basket에 저장
      console.log(newBasket);
      const baskets = [...basketIn, newBasket];
      //또는 baskets.push(basket)
      localStorage.setItem("baskets", JSON.stringify(baskets));
    };
  return (
    <div>
      {data?.fetchBoards?.map((el: IBoard) => (
        <div key={el._id}>
          {el.title} {el.writer}
          <button onClick={onClickBtn(el)}>localstorage에 저장하기</button>
        </div>
      ))}
    </div>
  );
}
