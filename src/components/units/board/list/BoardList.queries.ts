import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export const FETCH_BEST_BOARD = gql`
  query {
    fetchBoardsOfTheBest {
      writer
      title
      _id
      likeCount
      images
      createdAt
    }
  }
`;
