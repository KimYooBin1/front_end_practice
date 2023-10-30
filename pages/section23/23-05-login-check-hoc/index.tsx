import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { access } from "fs";
import { useRouter } from "next/router";
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };
  const onChangePW = (event: ChangeEvent<HTMLInputElement>): void => {
    setPW(event.currentTarget.value);
  };
  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다! 다시 시도해라");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push("/section23/23-05-login-check-hoc-success");
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
