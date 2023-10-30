import { useRouter } from "next/router";
import { ComponentType, ReactElement, useEffect } from "react";

export const 로그인체크 =
  (Component: () => JSX.Element) =>
  <P extends {}>(props: P): ReactElement => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인을 먼저 해주세요");
        router.push("/section23/23-05-login-check-hoc");
      }
    }, []);
    return <Component {...props} />;
  };
