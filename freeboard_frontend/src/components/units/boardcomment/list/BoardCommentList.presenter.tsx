import InfiniteScroll from "react-infinite-scroller";
import type { IBoardCommentListUIProps } from "./BoardCommentList.type";
import BoardCommentListUiItem from "./BoardCommentList.item";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if (!props.data) return <div></div>;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUiItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
