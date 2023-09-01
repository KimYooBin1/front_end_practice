import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    try {
      const result = await 나의함수({
        variables: {
          writer: "훈이",
          title: "contents",
          contents: "반갑",
        },
      });
      console.log(result);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>Graphql-API 요청하기</button>;
}
