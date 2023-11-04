import { add } from "../../pages/section33/33-01-jest"

it("더하기 잘되는지 test하기", ()=>{
    const result = add(3, 5)
    // expect(result).toBe(8); success 
    expect(result).toBe(7);  //fail
    
})


//여러개를 한번에 테스트 할 수 있다.
// describe("나만의 테스트 그륩 만들기", () =>{
//     it("더하기 테스트", ()=>{

//     })

//     it("빼기 테스트", ()=>{

//     })

//     it("곱하기 테스트", ()=>{

//     })
// })