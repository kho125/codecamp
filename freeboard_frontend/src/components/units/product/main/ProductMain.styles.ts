import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Main = styled.div`
  height: 100%;
  border: 1px solid #000;
  /* margin: 0 200px 300px; */
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Best__Title = styled.div`
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
    background-color: #ffd600;
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
  :active {
    color: #000;
  }
`;

export const Soldout = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: #555;
  cursor: pointer;
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
  :focus {
    outline: 0;
  }
`;

export const Date__Input = styled.input`
  margin-left: 24px;
  padding-left: 10px;
  width: 282px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  :focus {
    outline: 0;
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

export const Products = styled.div`
  /* display: flex;
  flex-direction: column; */
  overflow: scroll;
  overflow: auto;
`;

export const Bar = styled.div`
  /* width: 1200px; */
  border: 1px solid #bdbdbd;
`;

export const Sale = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Sale2 = styled.div`
  display: flex;
`;

export const Img = styled.img`
  margin: 20px 40px 20px 0;
  width: 160px;
  height: 160px;
`;

export const Name = styled.div`
  margin-top: 28px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const Contents = styled.div`
  margin-top: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const Tag = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;

export const Product = styled.div``;

export const User = styled.div`
  margin-top: 24px;
  display: flex;
`;

export const User__Img = styled.img`
  margin-right: 6px;
  width: 20px;
  height: 20px;
`;

export const User__Name = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const Heart__Icon2 = styled.img`
  margin-left: 22px;
  width: 20px;
  height: 18.35px;
`;

export const Heart__Count2 = styled.span`
  margin-left: 6px;
`;

export const Price = styled.div`
  display: flex;

  align-items: center;
`;

export const Price__Img = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 11px;
`;

export const Money = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Registration = styled.button`
  width: 124px;
  height: 52px;
  margin-top: 40px;
  padding-top: 5px;
  width: 124px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: #fff;
  border: 1px solid #ffd600;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: #ffd600;
    transition: 0.5s;
  }

  /* position: relative;
  display: inline-flex;
  padding: 10px 30px;
  background: #363636;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  overflow: hidden;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: ${(props) => props.buttonY};
    left: ${(props) => props.buttonX};
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    background: #2196f3;
    transition: width 0.5s, height 0.5s;
  }

  :hover::before {
    width: 300px;
    height: 300px;
  } */

  /* position: absolute;
  top: ${(props) => props.buttonY};
  left: ${(props) => props.buttonX};
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s; */
`;

export const Llrr = styled.span`
  display: flex;
  flex-direction: column;
`;
