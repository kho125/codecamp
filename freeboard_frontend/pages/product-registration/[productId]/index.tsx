import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.container";
import ProductCommentWrite from "../../../src/components/units/productComment/write/ProductCommentWrite.container";
import ProductCommentList from "../../../src/components/units/productComment/list/ProductCommentList.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <ProductCommentWrite />
      <ProductCommentList />
    </>
  );
}
