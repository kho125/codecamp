import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        name
      }
      buyer {
        name
      }
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation tU($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const FETCH_USED_ITEM_OF_THE_BEST = gql`
  query fuiotb {
    fetchUseditemsOfTheBest {
      name
      images
    }
  }
`;

// import { gql } from "@apollo/client";

// export const FETCH_USED_ITEMS = gql`
//   query fetchUseditems {
//     fetchUseditems {
//       _id
//       name
//       contents
//       price
//       tags
//       images
//     }
//   }
// `;

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
