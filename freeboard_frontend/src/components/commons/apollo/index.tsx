import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { createUploadLink } from "apollo-upload-client";
import { useEffect, useState } from "react";
interface IAplloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();
export default function AplloSetting(props: IAplloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    console.log("브라우저");
    const result = localStorage.getItem("accessToken");
    console.log(result);
    if (result) {
      setAccessToken(result);
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });
  //prettier-ignore
  return( 
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
  )
}
