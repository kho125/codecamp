import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(dataBoardsCount?.fetchBoardsCount) / 10);

  // const getDebounce = _.debounce((data) => {
  //   return { search: data };
  // });

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    // getDebounce(event.target.value);
  }

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event: MouseEvent<HTMLDivElement>) {
    // 무슨뜻?
    router.push(`/boards/${(event.target as Element).id}`);
  }

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    // <input type="text" onChange={onChangeSearch} />
    <BoardListUI
      data={data}
      onChangeSearch={onChangeSearch}
      refetch={refetch}
      keyword={keyword}
      dataBoardsCount={dataBoardsCount}
      lastPage={lastPage}
      startPage={startPage}
      setStartPage={setStartPage}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
