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
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import withApollo from "../src/components/commons/hocs/withApollo";
import withGlobalContext from "../src/components/commons/hocs/withGlobalContext";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../src/components/commons/layout/header/LayoutHeader.queries";
import { IQuery } from "../src/commons/types/generated/types";

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  useInfo: any;
  setUserInfo: any;
}

// interface IUserContext {
interface IGlobalContext {
  userInfo: IQuery | undefined;
}

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const values = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. 발급 받은 accessToken으로 방금 실패했던 쿼리 재실행하기
          // 재실행하기 위해 포워드
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include", // refreshToken 쿠키에 저장 허가 ..
  });

  // const uploadLink = createUploadLink({
  //   uri: "http://backend02.codebootcamp.co.kr/graphql",
  //   headers: {
  //     authorization: `Bearer ${
  //       (typeof window !== "undefined" &&
  //         localStorage.getItem("accessToken")) ||
  //       ""
  //     }`,
  //   },
  // });

  const client = new ApolloClient({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
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

// export default MyApp;
export default withGlobalContext(withApollo(MyApp));
