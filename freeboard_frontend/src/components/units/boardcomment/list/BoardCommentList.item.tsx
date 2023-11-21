import { getMyDate } from "../../../../common/utils/utils";
import { type MouseEvent, useState } from "react";
import * as CL from "./BoardCommentList.style";
import type { IBoardCommentListUIItemProps } from "./BoardCommentList.type";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { Modal } from "antd";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.query";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
export default function BoardCommentListUiItem(
  props: IBoardCommentListUIItemProps
) {
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  /* const qqq = (event) => {
    alert(event.target.id);
  };
  */
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  const onClickUpdate = () => {
    setIsEdit(true);
  };
  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onChangeDeletePassword = (event: MouseEvent<HTMLInputElement>) => {
    setMyPassword(event.currentTarget.value);
  };
  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력</div>
          <CL.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <CL.ItemWrapper>
          <CL.FlexWrapper>
            <CL.Avatar src="/images/avatar.png"></CL.Avatar>
            <CL.MainWrapper>
              <CL.WriterWrapper>
                <CL.Writer>{props.el?.writer}</CL.Writer>
                <CL.Star value={props.el?.rating} disabled />
              </CL.WriterWrapper>
              <CL.Contents>{props.el?.contents}</CL.Contents>
            </CL.MainWrapper>
            <CL.OptionWrapper>
              <CL.UpdateIcon
                onClick={onClickUpdate}
                src="/images/boardComment/list/option_update_icon.png/"
              ></CL.UpdateIcon>
              <CL.deleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onClickOpenDeleteModal}
              ></CL.deleteIcon>
            </CL.OptionWrapper>
          </CL.FlexWrapper>
          <div>{getMyDate(props.el?.createdAt)}</div>
        </CL.ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
