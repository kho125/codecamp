import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

// export const Best__Title = styled.div`
//   margin-bottom: 40px;
//   font-weight: bold;
//   font-size: 36px;
//   line-height: 42px;
//   display: flex;
//   justify-content: center;
// `;

export const Bests = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
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
    color: blue;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Enrollment = styled.button`
  width: 171px;
  height: 52px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #d3d3d3;
    transition: 0.3s;
  }
`;
