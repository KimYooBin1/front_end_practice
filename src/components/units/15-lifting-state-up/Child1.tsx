export default function Child1(props: any): JSX.Element {
  function onClickCountUp(): void {
    props.setNumber((prev: number) => prev + 1);
  }

  return (
    <div>
      <div>자식1의 카운트: {props.N}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
