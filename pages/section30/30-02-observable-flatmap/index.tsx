import { Observable } from "@apollo/client";
import { resolve } from "path";
import { from } from "zen-observable";
export default function ObservableFlatmapPage() {
  const onClickButton = (): void => {
    // new Promise((resolve, reject) => {});
    // new Observable((observer) => {});

    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) //fromPromise라 가정한다
      .flatMap((el) => from([`${el} 결과에 qqq적용`, `${el}결과에 zzz적용`]))
      .subscribe((el) => console.log(el));
  };
  return (
    <>
      <button onClick={onClickButton}>클릭</button>
    </>
  );
}
