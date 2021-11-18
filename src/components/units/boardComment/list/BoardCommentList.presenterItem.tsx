import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import {
  Avatar,
  Contents,
  DateString,
  DeleteIcon,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  WriterWrapper,
  OptionWrapper,
  Star,
  UpdateIcon,
  Writer,
  PasswordInput,
} from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: props.data?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/user.png" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.data.writer}</Writer>
                <Star value={props.data.rating} disabled />
              </WriterWrapper>
              <Contents>{props.data.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon src="/pencil.png/" onClick={onClickUpdate} />
              <DeleteIcon src="/delete.png" onClick={onClickOpenDeleteModal} />
            </OptionWrapper>
          </FlexWrapper>
          <DateString>{getDate(props.data.createdAt)}</DateString>
        </ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
    </>
  );
}

// import { useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
// import { MouseEvent, useState } from "react";
// import { getDate } from "../../../../commons/libraries/utils";
// import BoardCommentWrite from "../write/BoardCommentWrite.container";
// import {
//   DELETE_BOARD_COMMENT,
//   FETCH_BOARD_COMMENTS,
// } from "./BoardCommentList.queries";
// import {
//   Avatar,
//   Contents,
//   DateString,
//   DeleteIcon,
//   FlexWrapper,
//   ItemWrapper,
//   MainWrapper,
//   OptionWrapper,
//   UpdateIcon,
//   Writer,
// } from "./BoardCommentList.styles";
// import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";

// export default function BoardCommentListUIItem(
//   props: IBoardCommentListUIItemProps
// ) {
//   const router = useRouter();
//   const [isEdit, setIsEdit] = useState(false);
//   const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

//   function onClickUpdate() {
//     setIsEdit(true);
//   }

//   function onClickDelete(event: MouseEvent<HTMLImageElement>) {
//     const password = prompt("비밀번호를 입력해 주세요.");
//     deleteBoardComment({
//       variables: { password, boardCommentId: (event.target as Element).id },
//       refetchQueries: [
//         {
//           query: FETCH_BOARD_COMMENTS,
//           variables: { boardId: router.query.boardId },
//         },
//       ],
//     });
//   }

//   return (
//     <>
//       {!isEdit && (
//         <ItemWrapper>
//           <FlexWrapper>
//             <Avatar src="/images/avatar.png" />
//             <MainWrapper>
//               <Writer>{props.data.writer}</Writer>
//               <Contents>{props.data.contents}</Contents>
//             </MainWrapper>
//             <OptionWrapper>
//               <UpdateIcon
//                 src="/images/boardComment/list/option_update_icon.png/"
//                 onClick={onClickUpdate}
//               />
//               <DeleteIcon
//                 id={props.data._id}
//                 src="/images/boardComment/list/option_delete_icon.png/"
//                 onClick={onClickDelete}
//               />
//             </OptionWrapper>
//           </FlexWrapper>
//           <DateString>{getDate(props.data.createdAt)}</DateString>
//         </ItemWrapper>
//       )}
//       {isEdit && (
//         <BoardCommentWrite
//           isEdit={isEdit}
//           setIsEdit={setIsEdit}
//           data={props.data}
//         />
//       )}
//     </>
//   );
// }
