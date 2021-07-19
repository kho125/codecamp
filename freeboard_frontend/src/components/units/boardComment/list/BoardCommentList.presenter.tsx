// import {
//   User_list,
//   User__Box,
//   User__Img,
//   User__m,
//   User__Name,
//   P__Box,
//   User__p,
//   User__Day,
//   Comment__Img,
//   Write__Img,
//   Delete__Img,
//   User__Bar,
// } from "./BoardCommentList.styles";

// // import { getDate } from "../../../../commons/libraries/utils";

// export default function BoardCommentListUI(props) {
//   return (
//     <>
//       <User_list>
//         <User__Box>
//           <User__Img src="/user.png"></User__Img>
//           <User__m>
//             <User__Name>노원두</User__Name>
//             <P__Box>
//               <User__p>
//                 진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
//                 부탁드립니다~!
//               </User__p>
//             </P__Box>

//             <User__Day>2021.02.22</User__Day>
//           </User__m>
//           <Comment__Img>
//             <Write__Img src="/pencil.png"></Write__Img>
//             <Delete__Img src="/delete.png"></Delete__Img>
//           </Comment__Img>
//         </User__Box>
//         <User__Bar></User__Bar>

//         <User__Box>
//           <User__Img src="/user.png"></User__Img>
//           <User__m>
//             <User__Name>땅찌</User__Name>
//             <P__Box>
//               <User__p>진짜 좋네요~ 감사합니다~!</User__p>
//             </P__Box>

//             <User__Day>2021.02.22</User__Day>
//           </User__m>
//           <Comment__Img>
//             <Write__Img src="/pencil.png"></Write__Img>
//             <Delete__Img src="/delete.png"></Delete__Img>
//           </Comment__Img>
//         </User__Box>
//         <User__Bar></User__Bar>

//         <User__Box>
//           <User__Img src="/user.png"></User__Img>
//           <User__m>
//             <User__Name>안우협</User__Name>
//             <P__Box>
//               <User__p>앞으로도 좋은 정보 부탁드립니다~!</User__p>
//             </P__Box>

//             <User__Day>{getDate(data.createdAt)}</User__Day>
//           </User__m>
//           <Comment__Img>
//             <Write__Img src="/pencil.png"></Write__Img>
//             <Delete__Img src="/delete.png"></Delete__Img>
//           </Comment__Img>
//         </User__Box>
//         <User__Bar></User__Bar>
//       </User_list>
//     </>
//   );
// }

// asdsadasdasdsaasiodfwiufhnuiefiewbfiewnkfnjknjk

import { Row, Column } from "./BoardCommentList.styles";

import { getDate } from "../../../../commons/libraries/utils";

export default function BoardListUI(props) {
  return (
    <div>
      <Row>
        <Column>
          <input type="checkbox" />
        </Column>
        {/* <Column>번호</Column> */}
        <Column>작성자</Column>
        <Column>제목</Column>
        {/* <span>{data.contents}</span> */}
        <Column>작성일</Column>
      </Row>
      {props.qqq?.fetchBoards.map((data, index) => (
        <Row key={data._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          {/* <Column>{index}</Column> */}
          <Column>{data.writer}</Column>
          <Column onClick={props.aaa} id={data._id}>
            {data.title}
          </Column>
          {/* 이벤트 핸들러 함수 */}
          {/* <span>{data.contents}</span> */}
          <Column>{getDate(data.createdAt)}</Column>
          <Column>
            <button id={data._id} onClick={props.Delete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
