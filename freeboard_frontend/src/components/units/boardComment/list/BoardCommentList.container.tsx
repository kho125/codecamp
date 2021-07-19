// import BoardCommentListUI from "./BoardCommentList.presenter";

// export default function BoardCommentList() {
//   // 값이변경되면 저장되는 스테이트들(변수들)

//   // onChange 얘를들면, 인풋창에 값 변경했을때 사용하는 함수

//   // onClick 예를들면, 등록하기 수정하기 등 버튼 클릭했을때 사용하는 함수

//   return <BoardCommentListUI />;
// }

//asdasdsadaijsuhfihuiwehuifohweoufhuewhufewf

import { useQuery, useMutation } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardCommentList.queries";
import { DELETE_BOARD } from "./BoardCommentList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function onClickDelete(event) {
    alert("해당 글을 삭제합니다~");

    try {
      await deleteBoard({
        variables: { aaa: event.target.id },
        // refetchQueries: [{query : FETCH_BOARDS}]
      });
      alert("삭제가 완료되었습니다.");
    } catch (error) {}
  }
  function onClickPage(event) {
    console.log(event.target.id);
    router.push(`/boards/${event.target.id}`);
    // 동적 라우팅
  }
  return (
    <BoardCommentListUI Delete={onClickDelete} qqq={data} aaa={onClickPage} />
  );
}
