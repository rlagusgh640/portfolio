import * as S from "./Searchbar.styles";
import type { SearchBarPageProps } from "./Searchbar.types";
export default function SearchBarPageUI(
  props: SearchBarPageProps
): JSX.Element {
  return (
    <>
      <S.SearchBox>
        <S.SearchInput
          placeholder="검색어를 입력하시오"
          onChange={props.onChangeSearchText}
        />
        <S.SearchIcon />
      </S.SearchBox>
    </>
  );
}
