import { Header, Logo, Member, Login, SignUp } from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Header>
      <Logo></Logo>
      <Member>
        <Login>로그인</Login>
        <SignUp>회원가입</SignUp>
      </Member>
    </Header>
  );
}
