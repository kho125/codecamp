import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useContext } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { GlobalContext } from "./withGlobalContext";
// @ts-ignore
const withApollo = (Component) => (props) => {
  const { accessToken, setAccessToken } = useContext(GlobalContext);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer${getAccessToken(setAccessToken)}`,
            },
          });
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backend02.codebootcamp.co.kr/graphql02",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...props} />
    </ApolloProvider>
  );
};

export default withApollo;
