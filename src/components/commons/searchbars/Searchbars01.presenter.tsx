import { Searchs, Search, Date, SearchButton } from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
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
