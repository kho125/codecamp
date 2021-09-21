import ProductMainUI from "./ProductMain.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent, useState, useEffect } from "react";
import {
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USED_ITEM_OF_THE_BEST,
  FETCH_USED_ITEMS_I_PICKED,
} from "./ProductMain.queries";
import { IQuery } from "../../../../commons/types/generated/types";

export default function ProductMain() {
  const router = useRouter();
  const [hasMore, setHasMore] = useState(true);
  const [istoggled, setIstoggled] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { data: zzz, refetch } = useQuery(FETCH_USED_ITEMS);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data: item, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: best } = useQuery(FETCH_USED_ITEM_OF_THE_BEST);
  const [toggleitem] = useMutation(TOGGLE_USED_ITEM_PICK);
  const { data: isToggled } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  const [baskets, setBaskets] = useState([]);
  // 징바구니는 처음에 배열로 선언해 놓을 것
  // useEffect(() => {
  //   if (!accessToken) {
  //     alert("로그인 해주세요!");
  //     router.push("/market/login");
  //   }
  // }, []);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
    console.log(items);
  }, []);
  // 참고로 useEffct 안은 처음 페이지가 렌더링이 될때 실행이 된다.
  // localStorage에 있는 것들을 json 객체로 변환시켜 items에 담아둔다. 없으면 빈 배열을 담아둔다.

  const onLoadMore = () => {
    if (!item) return;
    fetchMore({
      variables: {
        page: Math.floor(item?.fetchUseditems.length) / 10 + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // if (prev.fetchUseditems.length > 100) setHasMore(false);
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

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
      istoggled={istoggled}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
    />
  );
}
