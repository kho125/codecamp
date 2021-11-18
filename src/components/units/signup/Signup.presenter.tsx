import {
  Background,
  Test,
  Wrapper,
  Signup,
  Error,
  Signup__Title,
  Information,
  Email__Title,
  Email__Input,
  Name__Title,
  Name__Input,
  Password__Title,
  Password__Input,
  Password2__Title,
  Password2__Input,
  Signup__Button,
} from "./Signup.styles";
import { useState } from "react";
import { INPUTS_INIT } from "./Signup.container";

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

export default function SignupUI(props) {
  const { isEdit, setIsEdit } = useState("");
  return (
    <>
      <Background></Background>
      <Test></Test>
      <Wrapper>
        <Signup>
          <Signup__Title>회원가입</Signup__Title>
          <Information>
            <Email__Title>이메일</Email__Title>
            <Email__Input
              placeholder="이메일을 입력해주세요."
              type="text"
              name="email"
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.email}</Error>
            <Name__Title>이름</Name__Title>
            <Name__Input
              placeholder="이름을 입력해주세요."
              type="text"
              name="name"
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.name}</Error>
            <Password__Title>비밀번호</Password__Title>
            <Password__Input
              placeholder="비밀번호를 입력해주세요."
              type="text"
              name="password"
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.password}</Error>
            <Password2__Title>비밀번호 확인</Password2__Title>
            <Password2__Input
              placeholder="비밀번호를 입력해주세요."
              type="text"
              name="repassword"
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.repassword}</Error>
          </Information>
          <Signup__Button
            onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}
            active={props.active}
          >
            회원가입하기
            {isEdit ? "회원가입하기" : ""}
          </Signup__Button>
        </Signup>
      </Wrapper>
    </>
  );
}
