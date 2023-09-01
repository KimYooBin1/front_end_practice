const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "레드향" },
  { number: 3, title: "레드향" },
  { number: 4, title: "레드향" },
  { number: 5, title: "레드향" },
  { number: 6, title: "레드향" },
  { number: 7, title: "레드향" },
  { number: 8, title: "레드향" },
  { number: 9, title: "레드향" },
];

export default function MapFruitsPage() {
  //1. 가장 기본 예제
  //   const aaa = [
  //     <div>1 레드향</div>,
  //     <div>2 샤인머스켓</div>,
  //     <div>3 산청딸기</div>,
  //   ];
  const bbb = FRUITS.map((el) => (
    <div>
      {el.number}: {el.title}
    </div>
  ));
  return (
    // <div>bbb</div>
    <div>
      {FRUITS.map((el) => (
        <div>
          {el.number}: {el.title}
        </div>
      ))}
    </div>
  );
}
