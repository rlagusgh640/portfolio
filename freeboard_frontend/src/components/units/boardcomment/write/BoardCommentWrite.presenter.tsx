import * as CW from "./BoardCommentWrite.style";
import type { IBoardCommentWriteUI } from "./BoardCommentWrite.type";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUI) {
  return (
    <CW.Wrapper>
      {!props.isEdit && (
        <>
          <CW.PencilIcon src="/images/boardComment/write/pencil.png"></CW.PencilIcon>
          <span>댓글</span>
        </>
      )}
      <CW.InputWrapper>
        <CW.Input
          type="text"
          placeholder="작성자"
          value={props.writer || (props.el?.writer ?? "")}
          readOnly={!!props.el?.writer}
          onChange={props.onChangeWriter}
        />
        <CW.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
          value={props.password}
        />
        <CW.Star onChange={props.setStar} />
      </CW.InputWrapper>
      <CW.ContentsWrapper>
        <CW.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
          value={props.contents || (props.el?.contents ?? "")}
        ></CW.Contents>

        <CW.BottomWrapper>
          <CW.ContentsLength>
            {" "}
            {(props.contents
              ? props.contents.length
              : props.el?.contents.length) ?? 0}
            /100
          </CW.ContentsLength>
          <CW.Button
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </CW.Button>
        </CW.BottomWrapper>
      </CW.ContentsWrapper>
    </CW.Wrapper>
  );
}
