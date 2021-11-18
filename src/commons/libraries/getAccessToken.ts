import { GraphQLClient, gql } from "graphql-request";
import { Dispatch, SetStateAction } from "react";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// 1. refreshToken 으로 새로운 accessToken 발급받기
export const getAccessToken = async (
  setAccessToken: Dispatch<SetStateAction<string>>
) => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend02.codebootcamp.co.kr/graphql02",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error: any) {
    console.log(error.message);
  }
};
