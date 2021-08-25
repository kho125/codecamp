import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import ProductCommentWrite from "../write/ProductCommentWrite.container";
import {
  DELETE_USEDITEM_COMMENT,
  FETCH_USEDITEM_COMMENTS,
} from "./ProductCommentList.queries";
import {
  Avatar,
  Contents,
  DateString,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  WriterWrapper,
  OptionWrapper,
  Star,
  MessageIcon,
  Writer,
  PasswordInput,
} from "./ProductCommentList.styles";
import { IProductCommentListUIItemProps } from "./ProductCommentList.types";

export default function UesdItemCommentListUIItem(
  props: IProductCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteUesdItemComment] = useMutation(DELETE_USEDITEM_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  async function onClickDelete() {
    try {
      await deleteUesdItemComment({
        variables: {
          password: password,
          boardCommentId: props.data?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_COMMENTS,
            variables: { usedItemId: router.query.usedItemId },
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
              <MessageIcon
                src="/images/boards/detail/mes.png"
                onClick={onClickUpdate}
              />
            </OptionWrapper>
          </FlexWrapper>
          <DateString>{getDate(props.data.createdAt)}</DateString>
        </ItemWrapper>
      )}
      {isEdit && (
        <ProductCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
    </>
  );
}
