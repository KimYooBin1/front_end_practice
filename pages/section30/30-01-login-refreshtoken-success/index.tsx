import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccess() {
  //1.페이지에 접속하면 자동으로 data에 받아지고 data는 글로벌스테이트에 저장, 그 후에 리렌더링됨
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  //2. 버튼 클릭시 data에 받아지고 data는 글로벌 스테이트에 저장, 그 후에 리렌더링
  // const[나의함수, {data}] = useLazyQuery(FETCH_USER_LOGGED_IN)

  //3. axios처럼 사용하는 방법
  // const client = useApolloClient();
  // client.query()  == axios.get()과 동일한 방법

  const client = useApolloClient();
  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };
  return (
    <>
      <button onClick={onClickButton}>버튼을 클릭하세요</button>
    </>
  );
}
