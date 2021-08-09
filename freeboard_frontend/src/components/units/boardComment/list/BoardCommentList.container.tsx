import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  // 값이변경되면 저장되는 스테이트들(변수들)

  // onChange 예를들면, 인풋창에 값 변경했을때 사용하는 함수

  // onClick 예를들면, 등록하기 수정하기 등 버튼 클릭했을때 사용하는 함수

  return <BoardCommentListUI data={data} />;
}
