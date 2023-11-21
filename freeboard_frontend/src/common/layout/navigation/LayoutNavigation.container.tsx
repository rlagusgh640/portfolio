import { useRouter } from "next/router";
import LayoutNavigationUi from "./LayoutNavigation.presenter";
import type { MouseEvent } from "react";
export default function LayoutNavigation() {
  const router = useRouter();
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
  };
  return <LayoutNavigationUi onClickMenu={onClickMenu} />;
}
