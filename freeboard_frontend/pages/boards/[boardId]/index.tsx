//게시글 상세 페이지 /boards/[boardId]
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/boardcomment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/boardcomment/list/BoardCommentList.container";
export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
