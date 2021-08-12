import ProductMainUI from "./ProductMain.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./ProductMain.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

export default function ProductMain() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_USED_ITEMS);

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
      // dataBoardsCount={dataBoardsCount}
      // startPage={startPage}
      // setStartPage={setStartPage}
      onClickMoveToProductNew={onClickMoveToProductNew}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
