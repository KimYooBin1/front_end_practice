import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.valodation";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

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
      작성자: <Input01 type="text" register={register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목: <Input01 type="text" register={register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <Input01 type="text" register={register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      이메일: <Input01 type="text" register={register("email")} />
      <div>{formState.errors.email?.message}</div>
      PW: <Input01 type="password" register={register("password")} />
      <div>{formState.errors.password?.message}</div>
      phone: <Input01 type="text" register={register("phone")} />
      <div>{formState.errors.phone?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <Button01 title="등록하기" isActive={formState.isValid} />;
    </form>
  );
}

/*
    <button type="reset">form 안의 내용 전부 지워짐</button>
    <button type="submit">form onSubmit 실행됨</button> 기본값
    <button type="button">form 은 실행안되고 button 만 실행된다</button> 기본값
     
*/
