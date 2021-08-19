import {
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USED_ITEM_OF_THE_BEST,
} from "./ProductMain.queries";
import ProductMainUI from "./ProductMain.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState, useEffect } from "react";

export default function ProductMain() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data: item } = useQuery(FETCH_USED_ITEMS);
  const { data: best } = useQuery(FETCH_USED_ITEM_OF_THE_BEST);
  const [toggleitem] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [baskets, setBaskets] = useState([]);
  console.log(data);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
    console.log(items);
  }, []);

  const onClickBasket = (basketData) => (event) => {
    console.log(basketData);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    console.log(baskets);
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) {
      router.push(`/product/detail/${event.target.id}`);
      return;
    }

    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    router.push(`/product/detail/${event.target.id}`);
  };

  const aaa = () => {
    router.push("/product/new");
  };

  const detail = (event) => {
    router.push(`/product/detail/${event.target.id}`);

    const toggle = async (event) => {
      await toggleitem({
        variables: { useditemId: event.target.id },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
    };
    console.log(best);
    console.log(best?.fetchUseditemsOfTheBest[0].images[0]);
  };

  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data: zzz, refetch } = useQuery(FETCH_USED_ITEMS);

  function onClickMoveToProductNew() {
    router.push("/product/new");
  }

  function onClickMoveToProductDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/product/detail/${(event.target as Element).id}`);
  }

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <ProductMainUI
      data={data}
      refetch={refetch}
      keyword={keyword}
      onClickMoveToProductNew={onClickMoveToProductNew}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onChangeKeyword={onChangeKeyword}
      item={item}
      best={best}
      baskets={baskets}
      onClickBasket={onClickBasket}
      aaa={aaa}
      detail={detail}
      // toggle={toggle}
    />
  );
}
