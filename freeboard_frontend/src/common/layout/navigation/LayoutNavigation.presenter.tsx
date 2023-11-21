import * as LN from "./LayoutNavigation.style";
import type { ILayoutNaviProps } from "./LayoutNavigation.type";
const NAVI_MENU = [
  {
    name: "게시판",
    page: "/boards",
  },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/mypage" },
];
export default function LayoutNavigationUi(props: ILayoutNaviProps) {
  return (
    <LN.Wrapper>
      {NAVI_MENU.map((el) => (
        <div key={el.page}>
          <LN.MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </LN.MenuItem>
        </div>
      ))}
    </LN.Wrapper>
  );
}
