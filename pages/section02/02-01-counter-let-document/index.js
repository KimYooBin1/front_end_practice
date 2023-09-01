export default function CounterLetDocumentPage() {
  function onClickCountUp() {
    let ret = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = ret;
  }

  function onClickCountDown() {
    let ret = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = ret;
  }

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
    </div>
  );
}
