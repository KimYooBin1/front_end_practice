import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";



const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;



export default function PaginationNextPage() :JSX.Element{
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
  
const router = useRouter();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () :Promise<void>=> {
    const result = await 나의함수({
      variables: {
        createBoardInput:{

          //$ == variables 로 바꿔도 된다 같은
          writer,
          title,
          contents,
          password:"1234"
        }
      },
    });
    console.log(result);
    const boardId = result.data.createBoard._id;
    router.push(`/boards/${boardId}`)
  };
  const onChangeWriter = (event:ChangeEvent<HTMLInputElement>):void => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event:ChangeEvent<HTMLInputElement>) :void=> {
    setTitle(event.target.value);
  };
  const onChangeContents = (event:ChangeEvent<HTMLInputElement>):void => {
    setContents(event.target.value);
  };
  return (
  
    <div>
      작성자: <input role="input-writer" type="text" onChange={onChangeWriter} />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      내용: <input role="input-contents" type="text" onChange={onChangeContents} />
      <button role="submit-button" onClick={onClickSubmit}>Graphql-API 요청하기</button>;
    </div>
    );
}
