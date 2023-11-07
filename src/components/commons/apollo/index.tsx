import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
  gql,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { GraphQLClient } from "graphql-request";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
const GLOBAL_STATE = new InMemoryCache();

interface IApolloProps {
  children: JSX.Element;
}

export default function Apollo(props: IApolloProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // if (process.browser || typeof window !== "undefined") {   //두개의 조건이 같은 의미를 가짐, 둘다 알고 잇자
  //   const result = localStorage.getItem("accessToken");
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log("프론트엔드 서버에서 실행되었습니다");
  // }

  useEffect(() => {
    // 1. 기존방식(refreshToken 이전)
    // const result = localStorage.getItem("accessToken");

    // 2. 새로운 방식(refreshToekn 이후)
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //1. 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        //1-2. 해당 에러가 토큰만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            //2. refreshtoken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              //3. 재발급 받은 accesstoken 으로 방금 실패한 쿼리 실행하기
              console.log(newAccessToken);
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, //기존의 authorization: Bearer '만료된 토큰'
                  Authorization: `Bearer ${newAccessToken}`, //3-2 authorization 만 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); //3-3 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // cookie 에 data를 저장하기 위한 설정
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
    connectToDevTools: true,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
