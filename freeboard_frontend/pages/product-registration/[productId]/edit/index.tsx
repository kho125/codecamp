import { useQuery, gql } from "@apollo/client";
import { createContext } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../src/commons/types/generated/types";
import ProductRegistration from "../../../../src/components/units/product/registration/ProductRegistration.container";

const FETCH_USEDITEMS = gql`
  query fetchUseditem($FetchUseditem: ID!) {
    fetchUseditem(boardId: $bbb) {
      name
      remarks
      contents
      price
    }
  }
`;

interface IContext {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}
export const ProductEditPageContext = createContext<IContext>({});
export default function ProductEditPage() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);
  const value = {
    isEdit: true,
    data,
  };

  return (
    <ProductEditPageContext.Provider value={value}>
      <ProductRegistration />
    </ProductEditPageContext.Provider>
  );
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!위에꺼 맞는지 확인!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!위에꺼 맞는지 확인!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!위에꺼 맞는지 확인!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!위에꺼 맞는지 확인!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!위에꺼 맞는지 확인!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
