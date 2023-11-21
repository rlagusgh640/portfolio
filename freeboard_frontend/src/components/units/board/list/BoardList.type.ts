import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";
export interface IBoardListUIProps {
  onClickMoveToPage: (path: string) => () => void;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  data?: Pick<IQuery, "fetchBoards">;
  moveBoardNewPage: () => void;
  moveDetailPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  keyword: string;
  count?: number;
  onChangeKeyword: (value: string) => void;
}
