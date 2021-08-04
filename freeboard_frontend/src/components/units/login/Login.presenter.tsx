import {
  Wrapper,
  Background,
  Login,
  Logo,
  Email__Input,
  Password__Input,
  Error,
  LoginKeep,
  SigninButton,
  Bar,
  Find,
  EmailFind,
  PasswordFind,
  Signup,
  Test,
} from "./Login.styles";
import { INPUTS_INIT } from "./Login.container";

import { useState } from "react";
// import { BoardsEditPageContext } from "../../../../pages/boards/[boardId]/edit";

interface ILoginUIProps {
  onClickUpdate: MouseEventHandler<HTMLButtonElement> | undefined;
  active: boolean;
  inputsErrors: typeof INPUTS_INIT;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickSubmit: () => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginUI(props: ILoginUIProps) {
  const { isEdit, setIsEdit } = useState("");
  return (
    <>
      <Background></Background>
      <Test></Test>
      <Wrapper>
        <Login>
          <Logo>
            <img src="/images/boards/login/logo22.png" />
          </Logo>
          <Email__Input
            name="email"
            placeholder="이메일을 입력해주세요."
            onChange={props.onChangeInputs}
          />
          <Error>{props.inputsErrors.email}</Error>
          <Password__Input
            name="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangeInputs}
          />
          <Error>{props.inputsErrors.password}</Error>
          <LoginKeep>로그인 상태 유지</LoginKeep>
          <SigninButton
            onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}
            active={props.active}
          >
            로그인하기
            {isEdit ? "로그인하기" : ""}
          </SigninButton>
          <Bar></Bar>
          <Find>
            <EmailFind>이메일 찾기</EmailFind>
            <>|</>
            <PasswordFind>비밀번호 찾기</PasswordFind>
            <>|</>
            <Signup onClick={props.onClickMoveTosignup}>회원가입</Signup>
          </Find>
        </Login>
      </Wrapper>
    </>
  );
}
