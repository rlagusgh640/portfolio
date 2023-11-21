import UploadsUI from "./Upload01.presenter";
import { type ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Upload01.validation";
import { UPLOAD_FILE } from "./Upload01.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { type IUpdateProps } from "./Upload01.type";

export default function Uploads(props: IUpdateProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChageFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadsUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onChangeFile={onChageFile}
      onClickUpload={onClickUpload}
    />
  );
}
