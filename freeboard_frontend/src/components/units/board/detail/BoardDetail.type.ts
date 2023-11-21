import type { IQuery } from "../../../../commons/types/generated/types";
export interface IBoardDetailProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickUpdate: () => void;
  onClickList: () => void;
  onClickDisLike: () => void;
  onClickLike: () => void;
}
