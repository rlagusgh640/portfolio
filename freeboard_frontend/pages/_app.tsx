import type { AppProps } from "next/app";
import AplloSetting from "../src/components/commons/apollo";
import Layout from "../src/common/layout";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <AplloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </AplloSetting>
      /
    </RecoilRoot>
  );
}

export default MyApp;
