import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import BoardDetailUi from "./BoardDetail.presenter";
import { DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.query";
import type {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useEffect } from "react";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  // useEffect(() => {
  //   location.reload();
  // }, [data]);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [disLikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
  const onClickLike = () => {
    if (typeof router.query.boardId !== "string") return;
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickDisLike = () => {
    disLikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickUpdate = () => {
    if (typeof router.query.boardId !== "string") {
      alert("올바르지 않은 표시형식");
      void router.push("/");
      return <></>;
    }
    void router.push(`/boards/${router.query.boardId}/edit`);
  };
  const onClickList = () => {
    void router.push("/boards");
  };

  return (
    <BoardDetailUi
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickUpdate={onClickUpdate}
      onClickList={onClickList}
      data={data}
    />
  );
}
