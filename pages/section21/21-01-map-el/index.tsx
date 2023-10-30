export default function MapElPage(): JSX.Element {
  //1. 기본 방법
  ["철수", "영희", "훈이"].map((el, index) => {
    console.log(`el: ${el}`);
    console.log(`index: ${index}`);
  });

  //2. 매개변수 변경
  ["철수", "영희", "훈이"].map((elasd, indexasd) => {
    console.log(`el: ${elasd}`);
    console.log(`index: ${indexasd}`);
  });

  //3. 함수 선언식 방법
  ["철수", "영희", "훈이"].forEach(function aaa(el, index) {
    console.log(`el: ${el}`);
    console.log(`index: ${index}`);
  });
  return <></>;
}
