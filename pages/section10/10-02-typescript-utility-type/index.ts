export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}
// 1. Partial 타입
type aaa = Partial<IProfile>;
// 2. Required 타입
type bbb = Required<IProfile>;
// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;
// 4. Omit 타입
type ddd = Omit<IProfile, "school">;
// 5. Record 타입
type eee = "철수" | "영희" | "훈이";
let child1: eee = "영희";
let child2: string = "사과";

type fff = Record<eee, IProfile>;
// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile;
let hhh: ggg = "age";
//7. type vs interface 차이     =>      선언 병합
export interface IProfile {
  candy: number; //interface는 선언병합으로 추가됨
}
let profile: Partial<IProfile> = {
  candy: 10,
};
