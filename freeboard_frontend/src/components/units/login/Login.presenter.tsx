import {
  Wrapper,
  Login,
  Logo,
  EmailInput,
  PasswordInput,
  LoginKeep,
  SigninButton,
  Bar,
  Find,
  EmailFind,
  PasswordFind,
  Signup,
} from "./Login.styles";

export default function LoginUI() {
  return (
    <Wrapper>
      <Login>
        <Logo>
          <img src="/images/boards/login/logo22.png" />
        </Logo>
        <EmailInput placeholder="이메일을 입력해주세요." />
        <PasswordInput placeholder="비밀번호를 입력해주세요." />
        <LoginKeep>로그인 상태 유지</LoginKeep>
        <SigninButton>로그인하기</SigninButton>
        <Bar></Bar>
        <Find>
          <EmailFind>이메일 찾기</EmailFind>
          <>|</>
          <PasswordFind>비밀번호 찾기</PasswordFind>
          <>|</>
          <Signup>회원가입</Signup>
        </Find>
      </Login>
    </Wrapper>
  );
}
