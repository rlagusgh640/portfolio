import _ from "lodash";
import SearchBarPageUI from "./Searchbar.presenter";
import { type ChangeEvent } from "react";

import type { SearchBarProps } from "./Searchbar.types";
export default function SearchBar(props: SearchBarProps) {
  const getDeboucne = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 1000);

  const onChangeSearchText = (event: ChangeEvent<HTMLInputElement>): void => {
    getDeboucne(event.target.value);
  };
  return <SearchBarPageUI onChangeSearchText={onChangeSearchText} />;
}
