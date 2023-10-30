import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccess() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인을 먼저 해주세요");
      router.push("/section23/23-03-login-check");
    }
  }, []);
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}
