import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      contents
      price
      tags
      images
    }
  }
`;

// export const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int, $search: String) {
//     fetchBoards(page: $page, search: $search) {
//       _id
//       writer
//       title
//       createdAt
//     }
//   }
// `;

// export const FETCH_BOARDS_COUNT = gql`
//   query fetchBoardsCount {
//     fetchBoardsCount
//   }
// `;

// export const FETCH_BOARD = gql`
//   query fetchBoard($boardId: ID!) {
//     fetchBoard(boardId: $boardId) {
//       writer
//       createdAt
//       title
//       contents
//       youtubeUrl
//       likeCount
//       dislikeCount
//       boardAddress {
//         zipcode
//         address
//         addressDetail
//       }
//       images
//     }
//   }
// `;
