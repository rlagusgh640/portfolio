import { type IQuery } from "../../../commons/types/generated/types";

export interface ILayoutHeaderProps {
  onClickLogo: () => void;
  onClickLoginPage: () => void;
  onClickSubmitPage: () => void;
  saveData: boolean;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickLogout: () => void;
}
