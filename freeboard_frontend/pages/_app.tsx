import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import "antd/dist/antd.css";

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  useInfo: any;
  setUserInfo: any;
}

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const values = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={values}>
      <ApolloProvider client={client}>
        <Layout aaa={true}>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
