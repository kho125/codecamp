import { getDate } from "../../../../commons/libraries/utils";
import {
  Searchs,
  Search,
  Date,
  SearchButton,
  ColumnBasic,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnTitle,
  Enrollment,
  Footer,
  Row,
  TableBottom,
  TableTop,
  Wrapper,
  PageWrapper,
  Page,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <Wrapper>
        <Searchs>
          <Search placeholder="제목을 검색해주세요" />
          <Date placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
          <SearchButton>검색하기</SearchButton>
        </Searchs>
        <TableTop />
        <Row>
          <ColumnHeaderBasic>번호</ColumnHeaderBasic>
          <ColumnHeaderTitle>제목</ColumnHeaderTitle>
          <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
          <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
        </Row>
        {props.data?.fetchBoards.map((data: any, index: number) => (
          <Row key={data._id}>
            <ColumnBasic>{10 - index}</ColumnBasic>
            <ColumnTitle id={data._id} onClick={props.onClickMoveToBoardDetail}>
              {data.title}
            </ColumnTitle>
            <ColumnBasic>{data.writer}</ColumnBasic>
            <ColumnBasic>{getDate(data.createdAt)}</ColumnBasic>
          </Row>
        ))}
        <TableBottom />
        <Footer>
          <Enrollment onClick={props.onClickMoveToBoardNew}>
            <img src="/images/boards/list/write.png" />
            게시물 등록하기
          </Enrollment>
        </Footer>
      </Wrapper>

      <PageWrapper>
        <Page onClick={props.onClickPrevPage}>이전</Page>
        {new Array(10).fill(1).map((_, index) => {
          const currentPage = props.startPage + index;
          return (
            currentPage <= props.lastPage && (
              <Page
                key={currentPage}
                onClick={props.onClickPage}
                id={String(currentPage)}
              >
                {currentPage}
              </Page>
            )
          );
        })}
        <Page onClick={props.onClickNextPage}>다음</Page>
      </PageWrapper>
    </>
  );
}
