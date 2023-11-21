import * as LH from "./LayoutHeader.style";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";
export default function LayoutHeaderUi(props: ILayoutHeaderProps) {
  return (
    <LH.Wrapper>
      <LH.InnerWrapper>
        <LH.InnerLogo onClick={props.onClickLogo}>💎 LIVE</LH.InnerLogo>

        {props.saveData ? (
          <LH.ProfileGroup>
            <LH.Profile src="/images/board/list/user.png" />
            <LH.DetailProfile>▼</LH.DetailProfile>
            <button onClick={props.onClickLogout}>로그아웃</button>
          </LH.ProfileGroup>
        ) : (
          <div>
            <LH.InnerButton onClick={props.onClickLoginPage}>
              로그인
            </LH.InnerButton>
            <LH.InnerButton onClick={props.onClickSubmitPage}>
              회원가입
            </LH.InnerButton>
          </div>
        )}
      </LH.InnerWrapper>
    </LH.Wrapper>
  );
}
