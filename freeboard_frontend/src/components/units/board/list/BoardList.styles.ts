import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px 100px 10px;
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

export const TableTop = styled.div`
  border-top: 2px solid gray;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: #06f;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const Enrollment = styled.button`
  width: 171px;
  height: 52px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: gold;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

export const Page = styled.span`
  margin: 0 15px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: #06f;
    font-size: 60px;
    transition: 0.3s;
  }
`;
