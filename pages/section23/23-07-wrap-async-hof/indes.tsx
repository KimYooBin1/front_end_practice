import { gql, useMutation } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "훈이"
      password: "1234"
      title: "안녕하세요 훈이에요"
      contents: "반갑습니다"
    ) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutation(): JSX.Element {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수();
    console.log(result);
  };

  return (
    <>
      <button onClick={wrapAsync(onClickSubmit)}>게시물 등록</button>;
    </>
  );
}
