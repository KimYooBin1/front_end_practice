import { Global } from "@emotion/react";
import Apollo from "../src/components/commons/apollo";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import Layout from ".";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Apollo>
        <>
        {/* pageProps 란 ssr 를 통해 return 된 결과를 받아오는 변수이다 */}
          <Component {...pageProps} />    
        </>
      </Apollo>
    </RecoilRoot>
  );
}
