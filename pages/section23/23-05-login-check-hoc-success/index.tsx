import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { 로그인체크 } from "../../../src/components/commons/hocs/로그인체크";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccess() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}

export default 로그인체크(LoginSuccess);
