import {
  // FireFilledIcon,
  // Searchbar,
  // SearchbarInput,
  Searchs,
  Search,
  Date,
  SearchButton,
} from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    // <Searchbar>
    //   <FireFilledIcon />
    //   <SearchbarInput
    //     placeholder="검색어를 입력해 주세요."
    //     onChange={props.onChangeSearchbar}
    //   />
    // </Searchbar>
    <Searchs>
      <Search
        placeholder="제목을 검색해주세요"
        onChange={props.onChangeSearchbar}
      />
      <Date placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
      <SearchButton>검색하기</SearchButton>
    </Searchs>
  );
}
