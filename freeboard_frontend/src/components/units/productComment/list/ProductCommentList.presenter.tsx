import ProductCommentListUIItem from "./ProductCommentList.presenterItem";
import { IProductCommentListUIProps } from "./ProductCommentList.types";

export default function ProductCommentListUI(
  props: IProductCommentListUIProps
) {
  return (
    <>
      {props.data?.fetchBoardComments.map((data) => (
        <ProductCommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
