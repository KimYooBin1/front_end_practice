// //함수를 리턴하는 함수
// function aaa(apple) {
//   const apple = 10;

//   return function () {
//     const banana = 20;
//     console.log(banana);
//     console.log(apple);
//   };
// }

// aaa()();
//매개변수
// function aaa(apple) {
//   return function (banana) {
//     console.log(banana);
//     console.log(apple);
//   };
// }

// aaa(10)(20);

//화살표 함수
const aaa = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};

aaa(10)(20);
