import { BlueInput, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  //default 는 한 파일에 한개만 사용가능
  return (
    <div>
      작성자: <BlueInput type="text" onChange={props.bbb} />
      제목: <RedInput type="text" onChange={props.ccc} />
      내용: <BlueInput type="text" onChange={props.ddd} />
      <button onClick={props.aaa}>Graphql-API 요청하기</button>;
    </div>
  );
}
