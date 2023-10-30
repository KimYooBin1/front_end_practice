import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };
  const onChangePW = (event: ChangeEvent<HTMLInputElement>): void => {
    setPW(event.currentTarget.value);
  };
  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다! 다시 시도해라");
        return;
      }
      setAccessToken(accessToken);

      void router.push("/section30/30-01-login-refreshtoken-success");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePW} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
