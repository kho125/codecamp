import styled from "@emotion/styled";

export const Searchs = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search__Left = styled.div`
  display: flex;
`;

export const Onsale = styled.div`
  margin-right: 20px;
  font-size: 18px;
  line-height: 27px;
  color: #555;
  cursor: pointer;
  :hover {
    color: #333;
  }

  :active {
    color: #000;
  }
`;

export const Soldout = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: #555;
  cursor: pointer;
  :hover {
    color: #333;
  }

  :active {
    color: #000;
  }
`;

export const Search__Right = styled.div``;

export const Search__Input = styled.input`
  width: 282px;
  height: 52px;
  background-color: #f2f2f2;
  padding-left: 11.51px;
  border: none;
  transition: 0.3s;

  :focus {
    outline: 0;
    box-shadow: 1px 1px 5px #999;
    transition: 0.3s;
  }
`;

export const Date__Input = styled.input`
  margin-left: 24px;
  padding-left: 10px;
  width: 282px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  transition: 0.3s;

  :focus {
    outline: 0;
    box-shadow: 1px 1px 5px #999;
    transition: 0.3s;
  }
`;

export const Search__Button = styled.button`
  margin-left: 24px;
  width: 78px;
  height: 52px;
  color: #fff;
  background-color: #000;
  border: none;
  transition: 0.3s;

  :hover {
    transition: 0.3s;
    background-color: #444;
  }
`;
