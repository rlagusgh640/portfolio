import type { IUseditem } from "../../../../commons/types/generated/types";
import * as M from "./marketList.styles";
interface IMarketListUiItemProps {
  el?: IUseditem;
}
export default function MarketListUiItem(props: IMarketListUiItemProps) {
  return (
    <>
      <M.ItemWrapper>
        <M.Flex>
          <M.ProductImg src="/images/avatar.png"></M.ProductImg>
          <M.ContentWrapper>
            {props.el?.price}
            {props.el?.name}
            {props.el?.images}
            {props.el?.tags}
          </M.ContentWrapper>
        </M.Flex>
      </M.ItemWrapper>
    </>
  );
}
