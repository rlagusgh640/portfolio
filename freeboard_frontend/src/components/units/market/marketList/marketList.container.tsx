import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEMS } from "./marketList.query";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Column = styled.span`
  margin: 10px;
  cursor: pointer;
`;

export default function StaticRoutedPage(): JSX.Element {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, { variables: { isSoldout: true } });

  const onLoadMore = async () => {
    if (data === undefined) return;
    await fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchBoards: [prev.fetchUseditems],
          };
        }
        return {
          fetchBoards: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}
      >
        {data?.fetchUseditems.map((el) => (
          <Row key={el._id}>
            <Column>{el?.name}</Column>
            <Column>{el?.price}</Column>
          </Row>
        )) ?? <div></div>}
      </InfiniteScroll>
    </div>
  );
}
