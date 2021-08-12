import { ApolloQueryResult, OperationVariables } from "@apollo/client";
// import { SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductMainUIProps {
  // data?: Pick<IQuery, "fetchBoards">;
  data: any;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  keyword: string;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  // startPage: number;
  // setStartPage: (value: SetStateAction<number>) => void;
  onClickMoveToProductNew: () => void;
  onClickMoveToProductDetail: () => void;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
