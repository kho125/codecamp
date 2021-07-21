import {
  Wrapper,
  Bar,
  Comment,
  CommentImg,
  Comment__p,
  Name__Password,
  Name,
  Password,
  Comment__Input,
  Comment__bottom,
  Letter,
  Enrollment__Button,
} from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <>
      <Wrapper>
        <Bar></Bar>
        <Comment>
          <CommentImg src="/comment.png"></CommentImg>
          <Comment__p>댓글</Comment__p>
        </Comment>

        <Name__Password>
          <Name
            name="writer"
            placeholder="작성자"
            onChange={props.onChangeComments}
          ></Name>
          <Password
            placeholder="비밀번호"
            onChange={props.onChangeComments}
          ></Password>
        </Name__Password>

        <Comment__Input
          name="contents"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeComments}
        ></Comment__Input>
        <Comment__bottom>
          <Letter>0/100</Letter>
          <Enrollment__Button onClick={props.onCommentSubmit}>
            등록하기
          </Enrollment__Button>
        </Comment__bottom>
      </Wrapper>
    </>
  );
}

// wekjfno2enouife2ofnoweafnolawengkjljbwalegbhklawbheghkawebhfbhawklefbwa

// import {
//   Wrapper,
//   Writer,
//   Date,
//   Hr,
//   Title,
//   MainPicture,
//   Contents,
//   VideoWrapper,
//   Video,
//   LikeDislikeCenterWrapper,
//   LikeDislikeWrapper,
//   LikeWrapper,
//   Like,
//   LikeNumber,
//   DisLikeWrapper,
//   Dislike,
//   DislikeNumber,
//   ButtonGrayWrapper,
//   ButtonGray,
//   BoardCommentWrapper,
//   BoardCommentWriter,
//   BoardCommentContents,
//   BoardCommentUpdateWriter,
//   BoardCommentUpdateContents,
//   BoardCommentButton,
//   BoardCommentList,
//   Row,
//   Column,
// } from "./BoardCommentWrite.styles";

// export default function BoardDetailUI(props) {
//   return (
//     <>
//       <Wrapper>
//         <Writer>{props.qqq ? props.qqq.fetchBoard.writer : "111"}</Writer>
//         <Date>12121</Date>
//         <Hr></Hr>
//         <Title>{props.qqq ? props.qqq.fetchBoard.title : "222"}</Title>
//         <MainPicture></MainPicture>
//         <Contents>{props.qqq ? props.qqq.fetchBoard.contents : "333"}</Contents>
//         <VideoWrapper>
//           <Video></Video>
//         </VideoWrapper>

//         <LikeDislikeCenterWrapper>
//           <LikeDislikeWrapper>
//             <LikeWrapper>
//               <Like></Like>
//               <LikeNumber>1913</LikeNumber>
//             </LikeWrapper>
//             <DisLikeWrapper>
//               <Dislike></Dislike>
//               <DislikeNumber>1913</DislikeNumber>
//             </DisLikeWrapper>
//           </LikeDislikeWrapper>
//         </LikeDislikeCenterWrapper>
//       </Wrapper>
//       <ButtonGrayWrapper>
//         <ButtonGray onClick={props.gotoList}>목록으로</ButtonGray>
//         <ButtonGray onClick={props.gotoEdit}>수정하기</ButtonGray>
//         <ButtonGray onClick={props.onClickDelete}>삭제하기</ButtonGray>
//       </ButtonGrayWrapper>
//       <BoardCommentWrapper>
//         <BoardCommentWriter
//           name="writer"
//           placeholder="작성자"
//           onChange={props.onChangeComments}
//         ></BoardCommentWriter>
//         <BoardCommentContents
//           name="contents"
//           placeholder="내용"
//           onChange={props.onChangeComments}
//         ></BoardCommentContents>
//         <BoardCommentButton onClick={props.onCommentSubmit}>
//           등록하기
//         </BoardCommentButton>
//         <BoardCommentUpdateWriter
//           name="writer"
//           onChange={props.onChangeComments}
//         ></BoardCommentUpdateWriter>
//         <BoardCommentUpdateContents
//           name="contents"
//           onChange={props.onChangeComments}
//         ></BoardCommentUpdateContents>
//         <BoardCommentButton onClick={props.onCommentEdit}>
//           수정하기
//         </BoardCommentButton>
//         <BoardCommentList></BoardCommentList>

//         <Row>
//           <Column>아이디</Column>
//           <Column>작성자</Column>
//           <Column>내용</Column>
//           <Column>레이팅</Column>
//           <Column>에디트</Column>
//         </Row>
//         {props.commentdata?.fetchBoardComments.map((data, index) => (
//           <Row key={data._id}>
//             <Column>{data._id}</Column>
//             <Column>{data.writer}</Column>
//             <Column>{data.contents}</Column>
//             <Column>{data.rating}</Column>
//             <Column>
//               <button
//                 name="commentid"
//                 value={data._id}
//                 onClick={props.onChangeComments}
//               >
//                 에디트
//               </button>
//             </Column>
//             <Column>
//               <button
//                 name="commentid"
//                 value={data._id}
//                 onClick={props.onCommentDelete}
//               >
//                 딜리트
//               </button>
//             </Column>
//           </Row>
//         ))}
//       </BoardCommentWrapper>
//     </>
//   );
// }

// <Box>
//   <CommentBox placeholder= "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다...."></CommentBox>
//   <Comment__Bar></Comment__Bar>
//     <Box__Bottom>
//       <Letter>0/100</Letter>
//       <CommentInput>등록하기</CommentInput>
//     </Box__Bottom>
// </Box>

// <User__Box>
//   <User__Img src= "/user.png"></User__Img>
//   <User__m>
//     <User__Name>노원두</User__Name>
//     <User__p>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</User__p>
//     <User__Day>2021.02.22</User__Day>
//   </User__m>
//   <Comment__Img>
//     <Write__Img src= "/pencil.png"></Write__Img>
//     <Delete__Img src= "/delete.png"></Delete__Img>
//   </Comment__Img>
// </User__Box>
