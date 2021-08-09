import styled from "@emotion/styled";

// export const SearchbarInput = styled.input`
//   width: 100%;
//   height: 100%;
//   border: none;
//   outline: none;
//   background: none;
//   margin: 0px 20px;
// `;

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
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 2px #999;
    transition: 0.5s;
  }
`;

export const Date = styled.input`
  width: 244px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 2px #999;
    transition: 0.5s;
  }
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
