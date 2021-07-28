import {
  Navigation,
  Menu,
  FreeBoard,
  Market,
  MyPage,
  Bar,
} from "./LayoutNavigation.styles";

export default function LayoutNavigationUI() {
  return (
    <Navigation>
      <Menu>
        <FreeBoard>자유게시판</FreeBoard>
        <Bar>ㅣ</Bar>
        <Market>중고마켓</Market>
        <Bar>ㅣ</Bar>
        <MyPage>마이페이지</MyPage>
      </Menu>
    </Navigation>
  );
}
