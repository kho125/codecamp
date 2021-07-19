// import { gql } from "@apollo/client";

// // 댓글 고유 ID를 불러오는 것
// export const FETCH_BOARD = gql`
//   query fetchBoard($boardId: ID!) {
//     fetchBoard(boardId: $boardId) {
//       writer
//       title
//       contents
//       rating
//     }
//   }
// `;

// // 게시글 삭제하는 것
// export const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;

// // 게시글 안에 댓글을 작성할 수 있게 해주는 것
// export const CREATE_BOARD_COMMENT = gql`
// mutation cb($CBC: CreateBoardCommentInput!, $boardId: ID!) {
//   coreateBoardComment(createBoardCommentInput: $CBC, boardId: $boardId) {
//     _id
//   }
// }
// }
// `;

// // 게시글 안에 댓글을 수정할 수 있게 해주는 것
// export const UPDATE_BOARD_COMMENT = gql`
// mutation ub($UBC: UpdateBoardCommentInput!, $password: String, $boardCommentId: ID!) {
//   updateBoardComment(updateBoardCommentInput: $UBC, password:, boardCommentId: $boardCommentId) {
//     _id
//   }
// }
// `;

// // 댓글 지우게 하는 것
// export const DELETE_BOARD_COMMENT = gql`
//   mutation db($password: String, $boardCommentId: ID!) {
//     deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
//   }
// `;

// // 댓글 정보를 가져오는 것
// export const FETCH_BOARD_COMMENTS = gql`
//   query fetchBoardComments($boardId: ID!) {
//     fetchBoardComments(boardId: $boardId) {
//       _id
//       writer
//       contents
//       rating
//     }
//   }
// `;

//29pfp2jiopfj2fojp2

import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const CREATE_BOARD_COMMENT = gql`
  mutation cb($cBC: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $cBC, boardId: $boardId) {
      _id
    }
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation ub(
    $uBC: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $uBC
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
    }
  }
`;
export const DELETE_BOARD_COMMENT = gql`
  mutation db($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;
export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
    }
  }
`;
