import { useMutation, gql } from "@apollo/client";

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
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //$ == variables 로 바꿔도 된다 같은
        writer: "훈이",
        title: "contents",
        contents: "반갑",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>Graphql-API 요청하기</button>;
}
