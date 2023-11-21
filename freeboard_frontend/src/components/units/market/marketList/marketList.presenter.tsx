import InfiniteScroll from "react-infinite-scroller";
import { type IQuery } from "../../../../commons/types/generated/types";
interface IMarketPageUiProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
}
export default function MarketPageUI(props: IMarketPageUiProps) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditems.map((el) => (
          <div key={el._id}>{el._id}</div>
        ))}
      </InfiniteScroll>
    </>
  );
}
