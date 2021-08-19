import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING } from "./ProductDetail.queries";
export default function ProductDetail() {
  const router = useRouter();
  const [createpointtransactionofbuyingandselling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  const gotoMain = () => {
    router.push("/product/main");
  };

  function onClickMoveToEdit() {
    router.push(`/product/detail/${router.query.useditemId}/edit`);
  }

  const purchase = async () => {
    try {
      await createpointtransactionofbuyingandselling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      alert("정말 잘사셨어요");
    } catch (error) {
      alert(error.message);
    }
  };

  if (typeof window === "undefined") return <></>;
  console.log(router.query.useditemId);
  console.log(data);
  return (
    <ProductDetailUI
      data={data}
      gotoMain={gotoMain}
      onClickMoveToEdit={onClickMoveToEdit}
      purchase={purchase}
    />
  );
}
