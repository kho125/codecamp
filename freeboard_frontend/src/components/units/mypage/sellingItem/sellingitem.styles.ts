import styled from '@emotion/styled'

export const Container = styled.div`
    padding-left: 30px;
    border-left: 1px solid #eaeaea;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Wrapper = styled.div`
    width: 1200px;
    padding-bottom: 300px;
`
export const StateWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const StateLine = styled.div`
    font-size: 16px;
    margin: 0 20px 0 0 ;
    color: #eaeaea;
`
export const MyItem = styled.div`
    font-size: 16px;
    margin: 0 20px 0 0 ;
    cursor: pointer;
    border-bottom: ${(props:any)=>(props.isActive ? "5px solid #ffd400" : "none")};
    font-weight: ${(props:any)=>(props.isActive ? "bold" : "nomal")};
`
export const MyPick = styled.div`
font-size: 16px;
margin: 0 20px 0 0 ;
cursor: pointer;
border-bottom: ${(props:any)=>(props.isActive ? "5px solid #ffd400" : "none")};
font-weight: ${(props:any)=>(props.isActive ? "bold" : "nomal")};
`
export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderBasic = styled.div`
  font-weight: bold;
  width: 20%;
  text-align: center;
  background-color: #eaeaea;
`;
export const ColumnHeaderTitle = styled.div`
  font-weight: bold;
  width: 40%;
  text-align: center;
  background-color: #eaeaea;
`;
export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
`;
export const ColumnBasicDelete = styled.div`
  width: 20%;
  text-align: center;
  cursor: pointer;
  :hover{
    font-weight: bold;
  }
`

export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: #ffd400;
  }
`;
export const Footer = styled.div`
  
`