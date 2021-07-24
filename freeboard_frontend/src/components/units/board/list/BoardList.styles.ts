import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px 100px 10px;
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

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: #fff;
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
    font-size: 30px;
    transition: 0.3s;
  }
`;
