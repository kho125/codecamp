import { getDate } from "../../../../commons/libraries/utils";
// import Paginations01 from "../../../commons/searchbars/Searchbars01.container";
import Searchbars01 from "../../../commons/searchbars/Searchbars01.container";
import {
  ColumnBasic,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  TextToken,
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
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <Wrapper>
        <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
        <Row>
          <ColumnHeaderBasic>번호</ColumnHeaderBasic>
          <ColumnHeaderTitle>제목</ColumnHeaderTitle>
          <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
          <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
        </Row>
        {props.data?.fetchBoards.map((data, index: number) => (
          <Row key={data._id}>
            <ColumnBasic>{10 - index}</ColumnBasic>
            <ColumnTitle id={data._id} onClick={props.onClickMoveToBoardDetail}>
              {data.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((data) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === data}>
                    {data}
                  </TextToken>
                ))}
            </ColumnTitle>
            <ColumnBasic>{data.writer}</ColumnBasic>
            <ColumnBasic>{getDate(data.createdAt)}</ColumnBasic>
          </Row>
        ))}
        <TableBottom />
        <Footer>
          {/* <Paginations01
            refetch={props.refetch}
            count={props.dataBoardsCount?.fetchBoardsCount}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
          /> */}
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
                key={props.startPage + index}
                onClick={props.onClickPageNumber}
                id={String(props.startPage + index)}
              >
                {props.startPage + index}
              </Page>
            )
          );
        })}
        <Page onClick={props.onClickNextPage}>다음</Page>
      </PageWrapper>
    </>
  );
}
