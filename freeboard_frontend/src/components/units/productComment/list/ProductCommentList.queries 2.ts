import { gql } from "@apollo/client";

export const FETCH_USEDITEM_COMMENTS = gql`
  query fetchUsedItemComments($usedItemId: ID!) {
    fetchUsedItemComments(usedItemId: $usedItemId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const DELETE_USEDITEM_COMMENT = gql`
  mutation deleteUsedItemComment($password: String, $usedItemCommentId: ID!) {
    deleteUsedItemComment(
      password: $password
      usedItemCommentId: $usedItemCommentId
    )
  }
`;
