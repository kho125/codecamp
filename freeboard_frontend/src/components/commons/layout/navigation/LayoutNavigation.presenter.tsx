import {
  Navigation,
  Menu,
  Dog,
  FreeBoard,
  Market,
  MyPage,
  Bar,
} from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Navigation>
      <Menu>
        <Dog id="/openapis" onClick={props.onClickMenu}>
          강아지
        </Dog>
        <Bar>ㅣ</Bar>
        <FreeBoard id="/boards" onClick={props.onClickMenu}>
          자유게시판
        </FreeBoard>
        <Bar>ㅣ</Bar>
        <Market id="/product/main" onClick={props.onClickMenu}>
          중고마켓
        </Market>
        <Bar>ㅣ</Bar>
        <MyPage id="/mypages" onClick={props.onClickMenu}>
          마이페이지
        </MyPage>
      </Menu>
    </Navigation>
  );
}
