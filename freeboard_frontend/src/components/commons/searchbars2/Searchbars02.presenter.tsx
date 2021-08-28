import {
  Searchs,
  Search__Left,
  Onsale,
  Soldout,
  Search__Right,
  Search__Input,
  // SearchIcon,
  Date__Input,
  Search__Button,
} from "./Searchbars02.styles";
import { ISearchbars02UIProps } from "./Searchbars02.types";

export default function Searchbars02UI(props: ISearchbars02UIProps) {
  return (
    <Searchs>
      <Search__Left>
        <Onsale>판매중상품</Onsale>
        <Soldout>판매된상품</Soldout>
      </Search__Left>

      <Search__Right>
        <Search__Input
          placeholder="제품을 검색해주세요."
          onChange={props.onChangeSearchbar}
        />
        {/* <SearchIcon src="/images/search.png" /> */}
        <Date__Input />
        <Search__Button>검색</Search__Button>
      </Search__Right>
    </Searchs>
  );
}
