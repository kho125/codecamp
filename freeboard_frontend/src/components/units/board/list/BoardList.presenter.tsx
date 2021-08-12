import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/Searchbars01.container";
import {
  Wrapper,
  Best__Title,
  Bests,
  Best__1,
  Img__1,
  Title,
  Best__Bottom,
  Best__left,
  User__Img,
  User__Name,
  Data,
  Best__Right,
  Like__Img,
  Like__Count,
  Best__2,
  Best__3,
  Best__4,
  ColumnBasic,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnTitle,
  Footer,
  PencilIcon,
  Enrollment,
  Row,
  TableBottom,
  TableTop,
  TextToken,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Wrapper>
      <Best__Title>베스트 게시글</Best__Title>
      <Bests>
        <Best__1>
          <Img__1 src="aaa/img1.png" />
          <Title>게시물 제목입니다.</Title>

          <Best__Bottom>
            <Best__left>
              <User__Img src="./images/boards/best/user.png" />
              <User__Name>노원두</User__Name>
            </Best__left>

            <Best__Right>
              <Like__Img src="./images/boards/best/like.png" />
              <Like__Count>356</Like__Count>
            </Best__Right>
          </Best__Bottom>
          <Data>Date : 2021.02.18</Data>
        </Best__1>
        <Best__2>
          <Img__1 src="aaa/img1.png" />
          <Title>게시물 제목입니다.</Title>

          <Best__Bottom>
            <Best__left>
              <User__Img src="./images/boards/best/user.png" />
              <User__Name>노원두</User__Name>
            </Best__left>

            <Best__Right>
              <Like__Img src="./images/boards/best/like.png" />
              <Like__Count>356</Like__Count>
            </Best__Right>
          </Best__Bottom>
          <Data>Date : 2021.02.18</Data>
        </Best__2>
        <Best__3>
          <Img__1 src="aaa/img1.png" />
          <Title>게시물 제목입니다.</Title>

          <Best__Bottom>
            <Best__left>
              <User__Img src="./images/boards/best/user.png" />
              <User__Name>노원두</User__Name>
            </Best__left>

            <Best__Right>
              <Like__Img src="./images/boards/best/like.png" />
              <Like__Count>356</Like__Count>
            </Best__Right>
          </Best__Bottom>
          <Data>Date : 2021.02.18</Data>
        </Best__3>
        <Best__4>
          <Img__1 src="aaa/img1.png" />
          <Title>게시물 제목입니다.</Title>

          <Best__Bottom>
            <Best__left>
              <User__Img src="./images/boards/best/user.png" />
              <User__Name>노원두</User__Name>
            </Best__left>

            <Best__Right>
              <Like__Img src="./images/boards/best/like.png" />
              <Like__Count>356</Like__Count>
            </Best__Right>
          </Best__Bottom>
          <Data>Date : 2021.02.18</Data>
        </Best__4>
      </Bests>

      <Searchbars01
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />

      <TableTop />
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
        <Paginations01
          refetch={props.refetch}
          count={props.dataBoardsCount?.fetchBoardsCount}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
        <Enrollment onClick={props.onClickMoveToBoardNew}>
          <PencilIcon src="/images/boards/list/write.png" />
          게시물 등록하기
        </Enrollment>
      </Footer>
    </Wrapper>
  );
}
