import { BlueInput, RedInput } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.type";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  //default 는 한 파일에 한개만 사용가능
  return (
    <div>
      작성자:{" "}
      <BlueInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard?.writer}
      />
      <br />
      제목:{" "}
      <RedInput
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard?.title}
      />
      <br />
      내용:{" "}
      <BlueInput
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard?.contents}
      />
      <br />
      <button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </button>
      ;
    </div>
  );
}
