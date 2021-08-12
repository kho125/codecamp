import { ChangeEvent } from "react";

export interface ISearchbars01Props {
  refetch: any;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars02UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
