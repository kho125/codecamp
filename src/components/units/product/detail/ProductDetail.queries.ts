import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation cP($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      name
    }
  }
`;

export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked {
    fetchUseditemsIPicked {
      _id
      name
      soldAt
      createdAt
      seller {
        name
      }
      price
    }
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

// import { gql } from "@apollo/client";

// // !----- 게시글 불러오기 -----!//
// export const FETCH_USED_ITEM = gql`
//   query fetchUsedItem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       _id
//       name
//       remarks
//       contents
//       price
//       tags
//       createdAt
//       images
//       pickedCount
//       seller {
//         _id
//         email
//         name
//         picture
//       }
//     }
//   }
// `;

// // !----- 찜하기 토글 -----!//
// export const TOGGLE_USED_ITEM_PICK = gql`
//   mutation toggleUseditemPick($useditemId: ID!) {
//     toggleUseditemPick(useditemId: $useditemId)
//   }
// `;

// // !----- 게시글 삭제하기 -----!//
// export const DELETE_USED_ITEM = gql`
//   mutation deleteUseditem($useditemId: ID!) {
//     deleteUseditem(useditemId: $useditemId)
//   }
// `;
