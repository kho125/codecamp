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

import { createContext, useState } from "react";

// function MyApp({ Component, pageProps }: AppProps) {
//   const client = new ApolloClient({
//     uri: "http://backend02.codebootcamp.co.kr/graphql",
//     cache: new InMemoryCache(),
//   });
// }

export const GlobalContext = createContext({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState();
  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={{ accessToken, setAccessToken }}>
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
