import { ChangeEvent, MouseEvent } from "react";
import { IProductComment } from "../../../../commons/types/generated/types";
import { INPUTS_INIT } from "./ProductCommentWrite.container";

export interface IProductCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: (value: boolean) => void;
  data?: IProductComment;
}

export interface IProductCommentWriteUIProps {
  inputs: typeof INPUTS_INIT;
  onClickWrite: () => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeInput: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeStar: (value: number) => void;
  isEdit?: boolean;
  data?: IProductComment;
}
