import { useContext } from "react";
import { GlobalContext } from "../../../commons/hocs/withGlobalContext";
// import { GlobalContext } from '../../../../../pages/_app'
import {
  Container,
  Wrapper,
  Title,
  UserInfo,
  UserImg,
  UserName,
  UserAmount,
  NaviWrapper,
  NaviItem01,
  NaviItem02,
  NaviItem03,
} from "./mypageNavi.styles";

export default function MyPageNaveUI(props: any) {
  const { userInfo } = useContext(GlobalContext);
  console.log("userInfo", userInfo);
  console.log("data", props.data);
  return (
    <>
      <Container>
        <Wrapper>
          <Title>MY PAGE</Title>
          <UserInfo>
            <UserImg
              src={
                props.data?.fetchUserLoggedIn.picture ||
                "/images/profile/profile.png"
              }
            ></UserImg>
            <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
            <UserAmount>
              {props.data?.fetchUserLoggedIn.userPoint.amount}{" "}
              <span style={{ color: "#ffd400", fontWeight: "bold" }}>
                Point
              </span>
            </UserAmount>
          </UserInfo>
          <NaviWrapper>
            <NaviItem01
              // @ts-ignore
              isActive01={props.isActive01}
              onClick={props.onClickMyItem}
            >
              내 장터
            </NaviItem01>
            {/* @ts-ignore */}
            <NaviItem02
              // @ts-ignore
              isActive02={props.isActive02}
              onClick={props.onClickMyPoint}
            >
              내 포인트
            </NaviItem02>
            {/* @ts-ignore */}
            {/* <NaviItem03
            // @ts-ignore
              isActive03={props.isActive03}
              onClick={props.onClickMyProfile}
            >
              프로필 관리
            </NaviItem03> */}
          </NaviWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
