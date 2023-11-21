import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  DELETE_BOARD,
  FETCH_BOARDS_COUNT,
} from "./BoardList.query";
import BoardListUi from "./BoardList.presenter";
import { type MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useSearch } from "../../../commons/hooks/useSearch";
import { useMovePage } from "../../../commons/hooks/useMove";

export default function BoardList() {
  const { keyword, onChangeKeyword } = useSearch();
  const { onClickMoveToPage } = useMovePage();
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    await deleteBoard({
      variables: {
        boardId: event.currentTarget.id,
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
      <BoardListUi
        refetchBoardsCount={refetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
        onClickMoveToPage={onClickMoveToPage}
        data={data}
        refetch={refetch}
        count={dataBoardsCount?.fetchBoardsCount}
        onClickDelete={onClickDelete}
        keyword={keyword}
      ></BoardListUi>
    </>
  );
}
