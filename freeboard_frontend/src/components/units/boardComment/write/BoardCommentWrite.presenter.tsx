import {
  Wrapper,
  Bar,
  Comment,
  CommentImg,
  Comment__p,
  CommentBox,
  Box,
  Comment__Bar,
  Box__Bottom,
  Letter,
  CommentInput,
  User__Box,
  User__Img,
  User__m,
  User__Name,
  User__p,
  User__Day,
  Comment__Img,
  Write__Img,
  Delete__Img
} from "./BoardCommentWrite.styles"

export default function BoardCommentWriteUI() {
  return (
    <>
      <Wrapper>
        <Bar></Bar>
        <Comment>
          <CommentImg src= "/comment.png"></CommentImg>
          <Comment__p>댓글</Comment__p>
        </Comment>
        <Box>
          <CommentBox placeholder= "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.."></CommentBox>
          <Comment__Bar></Comment__Bar>
            <Box__Bottom>
              <Letter>0/100</Letter>
              <CommentInput>등록하기</CommentInput>
            </Box__Bottom>
        </Box>

        <User__Box>
          <User__Img src= "/user.png"></User__Img>
          <User__m>
            <User__Name>노원두</User__Name>
            <User__p>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</User__p>
            <User__Day>2021.02.22</User__Day>
          </User__m>
          <Comment__Img>
            <Write__Img src= "/pencil.png"></Write__Img>
            <Delete__Img src= "/delete.png"></Delete__Img>
          </Comment__Img>
        </User__Box>
      </Wrapper>
    </>
  )
}
