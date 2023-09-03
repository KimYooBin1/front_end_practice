import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
  };
  const onChangeInput = (event: any) => {
    setInputs((prev) => ({
      ...prev,
      [event.currentTarget.id]: event.currentTarget.value,
    }));
  };
  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInput} />
      제목: <input type="text" id="title" onChange={onChangeInput} />
      내용: <input type="text" id="contents" onChange={onChangeInput} />
      <button onClick={onClickSubmit}>Graphql-API 요청하기</button>;
    </div>
  );
}
