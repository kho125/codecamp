import Registration from "../../../src/components/units/product/detail/ProductDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function RegistrationPage() {
  return (
    <>
      <Registration />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
