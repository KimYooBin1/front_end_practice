import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutation(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();
  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };
  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <button>Graphql-API 요청하기</button>;
    </form>
  );
}

/*
    <button type="reset">form 안의 내용 전부 지워짐</button>
    <button type="submit">form onSubmit 실행됨</button> 기본값
    <button type="button">form 은 실행안되고 button 만 실행된다</button> 기본값
     
*/
