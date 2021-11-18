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
      {/* <Best__Title>베스트 게시글</Best__Title> */}
      <Bests>
        {props.bestData?.fetchBoardsOfTheBest.map((data) => (
          <BestBoardWrapper
            onClick={() => props.onClickBestBoard(data._id)}
            key={data._id}
          >
            <BestBoardImgWrapper>
              <BestBoardImg
                src={
                  data.images[0]
                    ? `https://storage.googleapis.com/${data.images[0]}`
                    : "/images/mainIMG.jpg/"
                }
              />
            </BestBoardImgWrapper>

            <BestBoardTitle>{data.title}</BestBoardTitle>
            <BottomWrapper>
              <WriterWrapper>
                <Writer>
                  <ProfileIcon />
                  <WriterName>{data.writer}</WriterName>
                </Writer>
                <WriteDate>{getDate(data.createdAt)}</WriteDate>
              </WriterWrapper>
              <LikeBoardWrapper>
                <LikeBoardIcon />
                <LikeBoardPoint>{data.likeCount}</LikeBoardPoint>
              </LikeBoardWrapper>
            </BottomWrapper>
          </BestBoardWrapper>
        ))}
        {/* {data?.fetchUseditemsOfTheBest.map((data: any) => (
        <Best__1 key={data._id}>
          <Img__1 src="aaa/img1.png" />
          <Title></Title>

          <Best__Bottom>
            <Best__left>
              <User__Img src={`https://storage.googleapis.com/${data.images[0] || ""}`} />
              <User__Name></User__Name>
            </Best__left>

            <Best__Right>
              <Like__Img src="./images/boards/best/like.png" />
              <Like__Count></Like__Count>
            </Best__Right>
          </Best__Bottom>
          <Data></Data>
        </Best__1>
        ))} */}
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
