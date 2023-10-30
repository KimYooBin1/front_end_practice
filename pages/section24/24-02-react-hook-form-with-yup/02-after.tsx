import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.valodation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
  email: string;
  password: string;
  phone: string;
}

export default function GraphqlMutation(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };
  console.log(formState.isValid);
  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      이메일: <input type="text" {...register("email")} />
      <div>{formState.errors.email?.message}</div>
      PW: <input type="password" {...register("password")} />
      <div>{formState.errors.password?.message}</div>
      phone: <input type="text" {...register("phone")} />
      <div>{formState.errors.phone?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        Graphql-API 요청하기
      </button>
      ;
    </form>
  );
}

/*
    <button type="reset">form 안의 내용 전부 지워짐</button>
    <button type="submit">form onSubmit 실행됨</button> 기본값
    <button type="button">form 은 실행안되고 button 만 실행된다</button> 기본값
     
*/
