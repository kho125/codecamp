import ProductMainUI from "./ProductMain.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./ProductMain.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function ProductMain() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  function onClickMoveToProductNew() {
    router.push("/product/new");
  }

  function onClickMoveToProductDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/product/${(event.target as Element).id}`);
  }

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <ProductMainUI
      data={data}
      refetch={refetch}
      keyword={keyword}
      dataBoardsCount={dataBoardsCount}
      startPage={startPage}
      setStartPage={setStartPage}
      onClickMoveToProductNew={onClickMoveToProductNew}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
