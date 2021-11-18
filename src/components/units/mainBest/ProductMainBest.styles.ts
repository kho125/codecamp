import styled from "@emotion/styled";

export const Best__Boxs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 92px;
`;

export const Best__Box = styled.div`
  margin-right: 24px;
  width: 282px;
  height: 391px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: #ffd;
    transition: 0.5s;
  }
`;

export const Best__Img = styled.img`
  margin: 20px;
  width: 242px;
  height: 242px;
`;

export const Best__Left = styled.div`
  margin-left: 20px;
`;

export const Best__Name = styled.div`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const Best__Contents = styled.div`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #4f4f4f;
`;

export const Best__Price = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
`;

export const Best__Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 242px;
  margin-top: -46px;
`;

export const Heart__Icon = styled.img`
  width: 20px;
  height: 18.35px;
  margin-bottom: 4.65px;
`;

export const Heart__Count = styled.span`
  font-size: 16px;
  line-height: 24px;
`;
