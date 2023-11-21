import * as L from "./BoardList.styles";
import { getMyDate } from "../../../../common/utils/utils";
import type { IBoardListUIProps } from "./BoardList.type";
import Pagination01 from "../../../commons/Paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../../../common/searchbars/Searchbar.container";
export default function BoardListUi(props: IBoardListUIProps) {
  return (
    <>
      <SearchBar
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
        refetchBoardsCount={props.refetchBoardsCount}
      />
      <L.Wrapper>
        <L.TableTop />
        <L.Row>
          <L.Column>ID</L.Column>
          <L.Column>제목</L.Column>
          <L.Column>작성자</L.Column>
          <L.Column>날짜</L.Column>
        </L.Row>
        {props.data?.fetchBoards.map((el, index) => (
          <L.Row
            id={el._id}
            key={el._id}
            onClick={props.onClickMoveToPage(`/boards/${el._id}`)}
          >
            <L.Column>{index + 1}</L.Column>
            <L.ColumnTitle id={el._id}>
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split("#$%")
                .map((el) => (
                  <span
                    key={uuidv4()}
                    style={{ color: el === props.keyword ? "red" : "black" }}
                  >
                    {el}
                  </span>
                ))}
            </L.ColumnTitle>
            <L.Column>{el.writer}</L.Column>
            <L.Column>{getMyDate(el.createdAt)}</L.Column>
            <L.Delete id={el._id} onClick={props.onClickDelete}>
              게시글 삭제
            </L.Delete>
          </L.Row>
        ))}
        <L.TableTop />

        <L.Footer>
          <Pagination01 refetch={props.refetch} count={props.count} />
        </L.Footer>
        <L.BoardWriteButton onClick={props.onClickMoveToPage(`/boards/new`)}>
          <img src="images/board/list/write.png"></img>
          게시글 등록하기
        </L.BoardWriteButton>
      </L.Wrapper>
    </>
  );
}
