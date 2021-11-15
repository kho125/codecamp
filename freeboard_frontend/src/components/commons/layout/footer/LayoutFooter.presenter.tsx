import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Wrapper,
  SubWrapper,
  ContentsWrapper,
  Contents,
  Title,
  Underline,
  Copyright,
  Version,
} from "./LayoutFooter.styles";

export default function LayoutFooterUI() {
  return (
    <Wrapper>
      <SubWrapper>
        <Title>Oh~ Market</Title>
        <ContentsWrapper>
          <Contents> 제작자 : 김경호</Contents>
          <Contents> 연락처 : 010-6413-6116</Contents>
          <Contents> 이메일 : kyeongho94@gmail.com</Contents>
          <Contents> 깃허브 : https://github.com/kho125 </Contents>
          <Version> 2.3.2 ver. </Version>
        </ContentsWrapper>
        <Underline />
        <Copyright>Copyright © All Rights Reserved </Copyright>
      </SubWrapper>
    </Wrapper>
  );
}
