import styled from "@emotion/styled";

// export const Searchbar = styled.div`
//   width: 776px;
//   height: 52px;
//   border-radius: 15px;
//   background-color: #f5f2fc;
//   padding: 0px 20px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// export const FireFilledIcon = styled(FireFilled)`
//   color: #5729ff;
//   font-size: 30px;
//   cursor: pointer;

//   :hover {
//     color: red;
//   }
// `;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;

export const Searchs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`;

export const Search = styled.input`
  width: 776px;
  height: 52px;
  padding-left: 31.51px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
`;

export const Date = styled.input`
  width: 244px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: rgb(103, 103, 103);
    transition: 0.3s;
  }
`;
