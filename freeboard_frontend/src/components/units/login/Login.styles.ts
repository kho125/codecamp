import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000 url("/images/boards/login/background.png");
`;

export const Background = styled.div``;

export const Login = styled.div`
  width: 384px;
  height: 510px;
`;

export const Logo = styled.div`
  margin-bottom: 80px;
  height: 44px;
  display: flex;
  justify-content: center;
`;

export const EmailInput = styled.input`
  margin-bottom: 20px;
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 20px 0 20px 16px;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.6;
`;

export const PasswordInput = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 20px 0 20px 16px;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.6;
`;

export const LoginKeep = styled.div`
  margin: 20px 0 40px 12px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const SigninButton = styled.button`
  width: 384px;
  height: 64px;
  background-color: #4f4f4f;
  border-radius: 16px;
  border: none;
  color: #bdbdbd;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    background-color: #ffd600;
    color: #000;
  }
`;

export const Bar = styled.div`
  border: 1px solid #fff;
  margin-bottom: 29px;
`;

export const Find = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  cursor: pointer;
`;

export const EmailFind = styled.div`
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    color: #999;
  }
`;

export const PasswordFind = styled.div`
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    color: #999;
  }
`;

export const Signup = styled.div`
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    color: #999;
  }
`;
