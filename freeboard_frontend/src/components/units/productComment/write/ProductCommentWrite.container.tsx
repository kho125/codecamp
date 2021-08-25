import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FETCH_USEDITEM_COMMENTS } from "../list/ProductCommentList.queries";
import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import {
  CREATE_USEDITEM_COMMENT,
  UPDATE_USEDITEM_COMMENT,
} from "./ProductCommentWrite.queries";
import { IProductCommentWriteProps } from "./ProductCommentWrite.types";

export const INPUTS_INIT = {
  contents: "",
};

export default function ProductCommentWrite(props: IProductCommentWriteProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [createUsedItemComment] = useMutation(CREATE_USEDITEM_COMMENT);
  const [updateUsedItemComment] = useMutation(UPDATE_USEDITEM_COMMENT);

  function onChangeInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  // function onChangeStar(value: number) {
  //   setInputs({ ...inputs, rating: value });
  // }

  async function onClickWrite() {
    try {
      await createUsedItemComment({
        variables: {
          createUsedItemCommentInput: { ...inputs },
          usedItemId: router.query.usedItem,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_COMMENTS,
            variables: { usedItemId: router.query.usedItemId },
          },
        ],
      });
      setInputs(INPUTS_INIT);
    } catch (error) {
      alert(error.message);
    }
  }

  // async function onClickUpdate(event: MouseEvent<HTMLButtonElement>) {
  //   if (!inputs.contents || !inputs.password) {
  //     alert("내용을 모두 입력해 주세요.");
  //     return;
  //   }

  //   try {
  //     await updateUsedItemComment({
  //       variables: {
  //         updateUsedItemCommentInput: { contents: inputs.contents },
  //         password: inputs.password,
  //         usedItemCommentId: (event.target as Element).id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USEDITEM_COMMENTS,
  //           variables: { usedItemId: router.query.usedItemId },
  //         },
  //       ],
  //     });
  //     setInputs(INPUTS_INIT);
  //     props.setIsEdit?.(false);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <ProductCommentWriteUI
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
