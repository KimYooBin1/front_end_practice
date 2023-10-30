import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import FetchPolicyExample from "../22-01-fetch-policy-moved";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onClickBtn = () => {
    setIsOpen(true);
  };
  const onClickIsMove = () => {
    router.push("/section22/22-01-fetch-policy-moved");
  };
  return (
    <>
      {isOpen && <FetchPolicyExample />}
      <button onClick={onClickBtn}>
        버튼은 클릭하면 새로운 컴포넌트가 나타납니다!!
      </button>
      <button onClick={onClickIsMove}>
        버튼을 클릭하면 새로운 페이지로 넘어갑니다!!
      </button>
    </>
  );
}
