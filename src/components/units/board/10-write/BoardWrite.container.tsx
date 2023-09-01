import { useMutation, gql } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import BoardWriteUI from "./BoardWrite.presenter"; //export defualt 일떄 중괄호 사용 x
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries"; //export 된 것중 아무거나 가져올수 있다
//import * as name from ''; '' 에서 모든 import 를 name 으로 가져온다
import { useRouter } from "next/router";
import { IBoardWriteProps, Imyvariables } from "./BoardWrite.type";

export default function BoardWrite(props: IBoardWriteProps) {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [UpdateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result.data.createBoard.number);
    router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myvariables: Imyvariables = { number: Number(router.query.number) };
    if (writer) {
      myvariables.writer = writer;
    }
    if (title) {
      myvariables.title = title;
    }
    if (contents) {
      myvariables.contents = contents;
    }

    const result = await UpdateBoard({
      variables: myvariables,
    });
    router.push(`/section10/10-02-typescript-boards/${router.query.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
