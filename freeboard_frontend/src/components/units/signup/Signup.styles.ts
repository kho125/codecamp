import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./Signup.types";

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

export const Signup = styled.div`
  width: 384px;
  height: 510px;
`;

export const Signup__Title = styled.div`
  margin-bottom: 40px;
  height: 44px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  color: #fff;
`;

export const Information = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const Email__Title = styled.div`
  margin-bottom: 12px;
`;

export const Email__Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 20px;
  padding-left: 16px;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Name__Title = styled.div`
  margin-bottom: 12px;
`;

export const Name__Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 20px;
  padding-left: 16px;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Password__Title = styled.div`
  margin-bottom: 12px;
`;

export const Password__Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 20px;
  padding-left: 16px;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Password2__Title = styled.div`
  margin-bottom: 12px;
`;

export const Password2__Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 60px;
  padding-left: 16px;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Signup__Button = styled.button`
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

export const Error = styled.div`
  /* margin-top: -30px; */
  font-size: 14px;
  line-height: 20px;
  color: #ff0000;
`;
