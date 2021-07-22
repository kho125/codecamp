import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 152px;
  background-color: #fff;
`;

export const Logo = styled.div`
  background-image: url("/aaa/logo5.png"); // 사진 잘라서 붙인거
  margin: 58px 0 58px 360px;
  width: 270px;
  height: 50px;
`;

export const Member = styled.div`
  display: inline-flex;
  margin: 54px 360px 54px 0;
  font-weight: 700;
  font-size: 16px;
  /* text-align: center; */
`;

export const Login = styled.button`
  margin-right: 20px;
  font-weight: 700;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

export const SignUp = styled.button`
  width: 92px;
  height: 44px;
  padding: 10px 16px;
  font-weight: 700;
  border: none;
  background-color: #ffd600;
  border-radius: 18px;
  cursor: pointer;
`;
