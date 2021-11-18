import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./Login.types";

export const Wrapper = styled.div`
  width: 1920px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  background-color: #000;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

export const Test = styled.div`
  width: 1920px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/boards/login/background.png");
  position: absolute;
  z-index: -2;
`;

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

export const Email__Input = styled.input`
  margin-bottom: 15px;
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 20px 0 20px 16px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  transition: 0.3s;
  :focus {
    outline: none;
    transition: 0.3s;
    box-shadow: 1px 1px 10px;
  }
`;

export const Password__Input = styled.input`
  width: 384px;
  margin-bottom: 10px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 20px 0 20px 16px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  transition: 0.3s;
  :focus {
    outline: none;
    transition: 0.3s;
    box-shadow: 1px 1px 10px;
  }
`;

export const Checkbox = styled.button``;

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
  color: #111;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${(props: ISubmitButtonProps) =>
    props.active ? "#ffd600" : ""};
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

export const Error = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin: 5px 0 10px 0;
  color: #ff0000;
`;
