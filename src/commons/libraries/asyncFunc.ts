import { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
  void asyncFunc();
};

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //onSubmit 할때 페이지가 이동되려는 것을 막는다
    void asyncFunc();
  };
