import { gql } from "@apollo/client";

export const CREATE_USEDITEM_COMMENT = gql`
  mutation createUsedItemComment(
    $createUsedItemCommentInput: CreateUsedItemCommentInput!
    $usedItemId: ID!
  ) {
    createUsedItemComment(
      createUsedItemCommentInput: $createUsedItemCommentInput
      usedItemId: $usedItemId
    ) {
      _id
    }
  }
`;

export const UPDATE_USEDITEM_COMMENT = gql`
  mutation updateUsedItemComment(
    $updateUsedItemCommentInput: UpdateUsedItemCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateUsedItemComment(
      updateUsedItemCommentInput: $updateUsedItemommentInput
      password: $password
      usedItemCommentId: $usedItemCommentId
    ) {
      _id
    }
  }
`;
