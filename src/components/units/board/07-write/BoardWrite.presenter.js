import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  //default 는 한 파일에 한개만 사용가능
  return (
    <div>
      작성자: <input type="text" onChange={props.onChangeWriter} />
      제목: <RedInput type="text" onChange={props.onChangeTitle} />
      내용: <input type="text" onChange={props.onChangeContents} />
      <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
        Graphql-API 요청하기
      </BlueButton>
      ;
    </div>
  );
}
