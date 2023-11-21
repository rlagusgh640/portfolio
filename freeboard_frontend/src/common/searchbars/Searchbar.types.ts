import { type ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../commons/types/generated/types";
import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
export interface SearchBarPageProps {
  onChangeSearchText: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface SearchBarProps {
  onChangeKeyword: (value: string) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}
