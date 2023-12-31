import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccess() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}
