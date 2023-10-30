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
          <Component {...pageProps} />
        </>
      </Apollo>
    </RecoilRoot>
  );
}
