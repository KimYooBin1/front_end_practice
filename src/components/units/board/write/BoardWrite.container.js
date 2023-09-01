import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter"; //export defualt 일떄 중괄호 사용 x
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries"; //export 된 것중 아무거나 가져올수 있다
//import * as name from ''; '' 에서 모든 import 를 name 으로 가져온다

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  return (
    <BoardWriteUI
      aaa={onClickSubmit}
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
    />
  );
}
