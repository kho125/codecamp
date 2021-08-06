import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  Wrapper,
  InnerButton,
  InnerLogo,
  InnerWrapper,
} from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const { accessToken } = useContext(GlobalContext);
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>❄️ Logo</InnerLogo>
        {accessToken ? (
          <div>로그인 성공!</div>
        ) : (
          <div>
            <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
            <InnerButton onClick={props.onClickMoveToSignup}>
              회원가입
            </InnerButton>
          </div>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
