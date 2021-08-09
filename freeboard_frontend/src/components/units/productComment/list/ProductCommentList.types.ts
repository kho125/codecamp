import {
  IProductComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IProductCommentListUIProps {
  data?: IQuery;
}

export interface IProductCommentListUIItemProps {
  data: IProductComment;
}
