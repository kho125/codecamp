import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function BoardsDetailPage() {
    return (
        <>
            <BoardDetail />
            <BoardCommentWrite />
            {/* <BoardCommentList /> */}
        </>
    )
}