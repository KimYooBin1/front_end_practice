import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const 로그인체크 = (Component: any) => (props: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  //1. 로그인 체그(refreshToken 이전)
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인을 먼저 해주세요");
  //     router.push("/section23/23-05-login-check-hoc");
  //   }
  // }, []);

  //2. 로그인 체크(refreshToken 이후)
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === null) {
  //       alert("로그인을 먼저 해주세요");
  //       router.push("/section23/23-05-login-check-hoc");
  //     }
  //   });
  // }, []);

  //3. recoil 사용
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === null) {
        alert("로그인을 먼저 해주세요");
        router.push("/section23/23-05-login-check-hoc");
      }
    });
  }, []);

  return <Component {...props} />;
};
