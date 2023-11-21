import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}
export interface ISubmitButtonProps {
  isActive: boolean;
}
export interface IBoardWriteUiProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeLink: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
  onClickSubmit: () => void;
  onClickAddressSearch: () => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onCompleteAddress: (address: Address) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
  isActive: boolean;
  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
  fileUrls: string[];
  onToggleModal: () => void;
}
