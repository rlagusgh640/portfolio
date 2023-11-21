import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.query";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
//게시물 수정 페이지 /boards/[boardId]/edit
export default function BoardWritePage() {
  const router = useRouter();
  //엄격한
  /*
  if (typeof router.query.boardId !== "string") {
    router.push("/");
    return <></>;
  }
*/
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  return <BoardWrite isEdit={true} data={data} />;
}
