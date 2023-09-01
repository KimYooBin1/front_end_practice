export default function BoardComponent(props) {
  return (
    <div>
      <h1>{props.text}페이지</h1>
      제목: <input type="text" />
      <br />
      내용: <input type="text" />
      <br />
      <button>{props.text}하기</button>
    </div>
  );
}
