import {
  Wrapper,
  Bar,
  Comment,
  CommentImg,
  Comment_p,
  CommentBox,
  CommentInput
} from "./BoardCommentWrite.styles"

export default function BoardCommentWriteUI() {
  return (
    <>
      <Wrapper>
        <Bar></Bar>
        <Comment>
          <CommentImg src= "image/comment.png"></CommentImg>
          <Comment_p>댓글</Comment_p>
        </Comment>
        <CommentBox placeholder= "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentBox>
      </Wrapper>
    </>
  )
}
