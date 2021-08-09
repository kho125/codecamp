import { Page, Pages } from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <div>
      <Page>
        <Pages onClick={props.onClickPrevPage}>{`<`}</Pages>
        {new Array(10).fill(1).map((_, index) => {
          const currentPage = props.startPage + index;
          return (
            currentPage <= props.lastPage && (
              <Pages
                key={currentPage}
                onClick={props.onClickPage}
                id={String(currentPage)}
                isActive={currentPage === props.activedPage}
              >
                {currentPage}
              </Pages>
            )
          );
        })}
        <Pages onClick={props.onClickNextPage}>{`>`}</Pages>
      </Page>
    </div>
  );
}
