import { reject } from "lodash";
import { resolve } from "path";

export default function BasicPromiseAll() {
  const onClickPromise = async () => {
    console.time("=== 개별 promise 각각 ===");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공1");
      }, 1000);
    });
    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공2");
      }, 3000);
    });
    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공3");
      }, 2000);
    });
    const result = [result1, result2, result3];
    console.log(result);
    console.timeEnd("=== 개별 promise 각각 ===");
  };

  const onClickPromiseAll = async () => {
    console.time("=== promise-all ===");
    const result = await Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("성공1");
        }, 1000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("성공2");
        }, 3000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("성공3");
        }, 2000);
      }),
    ]);
    console.timeEnd("=== promise-all ===");
    console.log(result);
  };

  const onClickPromiseAll2 = async () => {
    const input = ["성공1", "성공2", "성공3"];
    const result = Promise.all(
      input.map((el) => {
        setTimeout(() => {
          resolve(el);
        }, 1000);
      })
    );
  };

  return (
    <>
      <button onClick={onClickPromise}>promise 버튼</button>
      <button onClick={onClickPromiseAll}>promise-all 버튼</button>
    </>
  );
}
