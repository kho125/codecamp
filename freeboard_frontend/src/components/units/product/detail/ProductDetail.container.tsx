import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_BOARD } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <ProductDetailUI />;
}
