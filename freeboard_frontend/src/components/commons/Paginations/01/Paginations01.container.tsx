import { useState } from "react";
import type { MouseEvent } from "react";
import Paginations01UI from "./Paginations01.presenter";
import type { IPaginations01Props } from "./Paginations01.types";

export default function Pagination01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    void props.refetch({ page: Number(event.currentTarget.id) });
  };
  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  return (
    <Paginations01UI
      activePage={activePage}
      startPage={startPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
