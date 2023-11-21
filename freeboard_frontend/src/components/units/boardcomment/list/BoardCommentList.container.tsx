import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.query";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentListItem() {
  const router = useRouter();
  // if (typeof router.query.boardId !== "string") {
  //   alert("올바르지 않은 게시글 아이디입니다.");
  //   void router.push("/");
  //   return <></>;
  // }

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, { variables: { boardId: router.query.boardId } });

  const onLoadMore = () => {
    if (!data) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };
  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
