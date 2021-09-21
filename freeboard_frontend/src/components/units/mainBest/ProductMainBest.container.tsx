import {
  Best__Boxs,
  Best__Box,
  Best__Left,
  Best__Img,
  Best__Name,
  Best__Contents,
  Best__Price,
  Best__Right,
  Heart__Icon,
  Heart__Count,
} from "./ProductMainBest.styles";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
    }
  }
`;

export default function ProductMainBest() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  console.log(data);
  const onClickBox = (dataId) => () => {
    router.push(`/product/detail/${dataId}`);
  };
  return (
    <Best__Boxs>
      {data?.fetchUseditemsOfTheBest.map((data: any) => (
        <Best__Box key={data._id}>
          <Best__Img
            src={`https://storage.googleapis.com/${data.images[0] || ""}`}
          />
          <Best__Left>
            <Best__Name>{data.name}</Best__Name>
            <Best__Contents>{data.remarks}</Best__Contents>
            <Best__Price>{data.price}</Best__Price>
          </Best__Left>

          <Best__Right>
            <Heart__Icon src="/images/boards/detail/heart.png" />
            <Heart__Count>{data.pickedCount}</Heart__Count>
          </Best__Right>
        </Best__Box>
      ))}
      ;
    </Best__Boxs>
  );
}
