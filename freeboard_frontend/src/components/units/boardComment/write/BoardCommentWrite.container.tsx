import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export const INPUTS_INIT = {
  writer: "",
  contents: "",
  password: "",
  rating: 0,
};

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  function onChangeStar(value: number) {
    setInputs({ ...inputs, rating: value });
  }

  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: { ...inputs },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputs(INPUTS_INIT);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(event: MouseEvent<HTMLButtonElement>) {
    if (!inputs.contents || !inputs.password) {
      alert("내용을 모두 입력해 주세요.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: inputs.contents },
          password: inputs.password,
          boardCommentId: (event.target as Element).id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputs(INPUTS_INIT);
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      inputs={inputs}
      onChangeInput={onChangeInput}
      onChangeStar={onChangeStar}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}

// import { useQuery, useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
// import { FETCH_BOARD } from "./BoardCommentWrite.queries";
// import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
// import {
//   UPDATE_BOARD_COMMENT,
//   FETCH_BOARD_COMMENTS,
//   DELETE_BOARD_COMMENT,
//   CREATE_BOARD_COMMENT,
// } from "./BoardCommentWrite.queries";
// // import { FETCH_BOARD_COMMENTS } from "./BoardCommentWrite.queries";
// // import { DELETE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
// // import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";

// import { useState } from "react";

// const commentinputsInit = {
//   writer: "",
//   contents: "",
// };

// export default function BoardCommentWrite(props) {
//   const router = useRouter();
//   const [commentid, setCommentId] = useState("");
//   const [commentinputs, setCommentInputs] = useState(commentinputsInit);

//   const { data: aaaa } = useQuery(FETCH_BOARD_COMMENTS, {
//     variables: {
//       boardId: router.query.aaa,
//     },
//   });

//   const { data } = useQuery(FETCH_BOARD, {
//     variables: {
//       boardId: router.query.aaa,
//     },
//   });

//   const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
//   const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
//   const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

//   function onChangeComments(event) {
//     if (event.target.name === "commentid") setCommentId(event.target.value);
//     else {
//       const newCommentInputs = {
//         ...commentinputs,
//         [event.target.name]: event.target.value,
//       };
//       setCommentInputs(newCommentInputs);
//     }
//     console.log(event.target.name);
//     console.log(event.target.value);
//   }

//   async function onCommentSubmit() {
//     try {
//       const result = await createBoardComment({
//         variables: {
//           cBC: {
//             writer: commentinputs.writer,
//             password: "123",
//             contents: commentinputs.contents,
//             rating: 0,
//           },
//           boardId: router.query.boardId,
//         },
//       });
//       alert("댓글이 등록되었습니다.");
//       router.push(`/boards/${router.query.boardId}`);
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   // 값이변경되면 저장되는 스테이트들(변수들)

//   // onChange 예를들면, 인풋창에 값 변경했을때 사용하는 함수

//   // onClick 예를들면, 등록하기 수정하기 등 버튼 클릭했을때 사용하는 함수

//   return (
//     <BoardCommentWriteUI
//       // onClickDelete={onClickDelete}
//       // gotoList={gotoList}
//       // gotoEdit={gotoEdit}
//       qqq={data}
//       commentdata={aaaa}
//       onChangeComments={onChangeComments}
//       onCommentSubmit={onCommentSubmit}
//       // onCommentEdit={onCommentEdit}
//       // onCommentDelete={onCommentDelete}
//     />
//   );
// }
