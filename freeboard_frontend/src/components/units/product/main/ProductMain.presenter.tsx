// import BuildManifestPlugin from "next/dist/build/webpack/plugins/build-manifest-plugin";
// import LayoutNavigation from "../../../commons/banner/LayoutBanner.container";

// import {
//   WrapperAll,
//   Wrapper,
//   WrapperRight,
//   HeadWrapper,
//   Head,
//   BannerWrapper,
//   TradingItemWrapper,
//   TradingMenu,
//   SearchWrapper,
//   MenuWrapper,
//   ItemWrapper,
//   ItemLeftWrapper,
//   ItemRightWrapper,
//   Price,
//   Picture,
//   ItemInfoWrapper,
//   Name,
//   Remarks,
//   Tag,
//   SellerHeartWrapper,
//   SellerWrapper,
//   Avatar,
//   Seller,
//   HeartWrapper,
//   Heart,
//   HeartNumber,
// } from "./ProductList.styles";

// export default function MarketListUI(props) {
//   return (
//     <WrapperAll>
//       <Wrapper>
//         <HeadWrapper>
//           <Head>베스트 상품</Head>
//         </HeadWrapper>
//         <BannerWrapper>
//           <LayoutNavigation best={props.best} />
//         </BannerWrapper>
//         <MenuWrapper>
//           <TradingItemWrapper>
//             <TradingMenu>판매중 상품</TradingMenu>
//             <TradingMenu>판매된 상품</TradingMenu>
//           </TradingItemWrapper>
//           <SearchWrapper>도와주십시오</SearchWrapper>
//         </MenuWrapper>


//         {props.item?.fetchUseditems.map((data) => (
//           <ItemWrapper key={data._id}>
//             <ItemLeftWrapper>
//               <Picture
//                 src={`https://storage.googleapis.com/${data.images[0]}`}
//                 onClick={props.detail}
//                 id={data._id}
//               />
//               <ItemInfoWrapper>
//                 <Name>{data.name}</Name>
//                 <Remarks>{data.remarks}</Remarks>
//                 <Tag>{data.tag}</Tag>

//                 <SellerHeartWrapper>
//                   <SellerWrapper>
//                     <Avatar></Avatar>
//                     <Seller>{data.seller.name}</Seller>
//                   </SellerWrapper>
//                   <HeartWrapper>
//                     <Heart onClick={props.toggle} id={data._id}></Heart>
//                     <HeartNumber>{data.pickedCount}</HeartNumber>
//                   </HeartWrapper>
//                 </SellerHeartWrapper>
//               </ItemInfoWrapper>
//             </ItemLeftWrapper>

//             <ItemRightWrapper>
//               <button onClick={props.onClickBasket(data)} id={data._id}>
//                 상품 상세보기
//               </button>
//               <Price>{data.price}원</Price>
//               <Price>{data.buyer?.name}</Price>
//             </ItemRightWrapper>
//           </ItemWrapper>
//         ))}
//       </Wrapper>
//       <WrapperRight>
//         <div>오늘본 상품</div>
//         {props.baskets.map((data) => (
//           <div key={data._id}>
//             <span>{data.name}</span>
//             <span>{data.remarks}</span>
//           </div>
//         ))}
//       </WrapperRight>
//     </WrapperAll>
//   );
// }





import {
  Full,
  Wrapper,
  Main,
  BannerWrapper,
  // Best__Title,
  // Best__Boxs,
  // Best__Box,
  // Best__Left,
  // Best__Img,
  // Best__Name,
  // Best__Contents,
  // Best__Price,
  // Best__Right,
  // Heart__Icon,
  // Heart__Count,
  Products,
  Bar,
  Sale,
  Sale2,
  Image,
  Product,
  Name,
  Remarks,
  Contents,
  Tag,
  User,
  User__Img,
  User__Name,
  Heart__Icon2,
  Heart__Count2,
  Price,
  Price__Img,
  Money,
  TextToken,
  Button,
  Registration,
  Aside,
  Aside__Title,
  Aside__Box,
  Aside__Heart,
  Aside__Heart__Icon,
  Aside__Heart__Count,
  Aside__Image,
  Aside__Name,
  Aside__Contents,
  Aside__Price,
  Aside__Tag
} from "./ProductMain.styles";
import { IProductMainUIProps } from "./ProductMain.types";
import { v4 as uuidv4 } from "uuid";
import Searchbars02 from "../../../commons/searchbars2/Searchbars02.container";
import LayoutNavigation from "../../../commons/banner/LayoutBanner.container";

export default function ProductMainUI(props: IProductMainUIProps) {
  return (
    <Full>
      <Main>
    <Wrapper>
        {/* <Best__Title>베스트 상품</Best__Title>
        <Best__Boxs>
          <Best__Box>
            <Best__Img src="/images/boards/detail/Tap.png" />
            <Best__Left>
              <Best__Name>삼성전자 갤럭시탭A 10.1</Best__Name>
              <Best__Contents>2019 LTE 32GB</Best__Contents>
              <Best__Price>240,120원</Best__Price>
            </Best__Left>

            <Best__Right>
              <Heart__Icon src="/images/boards/detail/heart.png" />
              <Heart__Count>20</Heart__Count>
            </Best__Right>
          </Best__Box>

          <Best__Box>
            <Best__Img src="/images/boards/detail/msi.png" />
            <Best__Left>
              <Best__Name>MSI MPG Z490 게이밍 엣지</Best__Name>
              <Best__Contents>인텔 CPU용</Best__Contents>
              <Best__Price>274,260원</Best__Price>
            </Best__Left>

            <Best__Right>
              <Heart__Icon src="/images/boards/detail/heart.png" />
              <Heart__Count>28</Heart__Count>
            </Best__Right>
          </Best__Box>

          <Best__Box>
            <Best__Img src="/images/boards/detail/lego.png" />
            <Best__Left>
              <Best__Name>레고 오버워치 레킹 볼</Best__Name>
              <Best__Contents>게임보다 더 귀여움 실화?</Best__Contents>
              <Best__Price>28,370원</Best__Price>
            </Best__Left>

            <Best__Right>
              <Heart__Icon src="/images/boards/detail/heart.png" />
              <Heart__Count>20</Heart__Count>
            </Best__Right>
          </Best__Box>

          <Best__Box>
            <Best__Img src="/images/boards/detail/keyboard.png" />
            <Best__Left>
              <Best__Name>ABKO HACKER K590</Best__Name>
              <Best__Contents>단하루 139만+GIFT</Best__Contents>
              <Best__Price>24,000원</Best__Price>
            </Best__Left>

            <Best__Right>
              <Heart__Icon src="/images/boards/detail/heart.png" />
              <Heart__Count>38</Heart__Count>
            </Best__Right>
          </Best__Box>
        </Best__Boxs> */}
        <BannerWrapper>
          <LayoutNavigation best={props.best} />
        </BannerWrapper>
        
        <Searchbars02
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />

        <Products>
          <Bar></Bar>
          {/* {props.data?.fetchUseditems.map((data) => ( */}
            {props.item?.fetchUseditems.map((data) => (
            <>
              <Sale key={data._id}>
                <Sale2>
                  <Image
                    key={data._id}
                    src={`https://storage.googleapis.com/${data.images.[0]}`}
                    onClick={props.detail}
                  />
                  <Product>
                    <Name>{data.name}</Name>
                    <Remarks>{data.remarks}</Remarks>
                    <Contents>{data.Contents}</Contents>
                    <Tag>{data.tags}</Tag>
                    <User>
                      <User__Img src="/images/boards/best/user.png" />
                      <User__Name>{data.seller.name}</User__Name>
                      <Heart__Icon2 src="/images/boards/detail/heart.png" />
                      {/* <Heart__Icon2 onClick={props.toggle} id={data._id}></Heart__Icon2> */}
                      <Heart__Count2>{data.pickedCount}</Heart__Count2>
                    </User>
                  </Product>
                </Sale2>
                <Price>
                {/* <Price>{data.price}원</Price> */}
                {/* <Price>{data.buyer?.name}</Price> */}
                  <Price__Img src="/images/boards/detail/price.png" />
                  <Money>{data.price}원</Money>
                </Price>
              </Sale>
              <Bar></Bar>
            </>
          ))}
        </Products>

        <Button onClick={props.onClickMoveToProductNew}>
          <Registration>상품 등록하기</Registration>
        </Button>
        
    </Wrapper>
      </Main>
      <Aside>
        <Aside__Title>오늘 본 상품</Aside__Title>
        <Aside__Box>
          <Aside__Heart>
            <Aside__Heart__Icon src="/images/boards/detail/heart.png" />
            <Aside__Heart__Count>20</Aside__Heart__Count>
          </Aside__Heart>
          <Aside__Image />
          <Aside__Name>삼성전자 갤럭시탭A 10.1</Aside__Name>
          <Aside__Contents>2019 LTE 32GB</Aside__Contents>
          <Aside__Price>240,120원</Aside__Price>
          <Aside__Tag>#삼성전자  #갤럭시탭  #갓성비</Aside__Tag>
        </Aside__Box>


        <Aside__Box>
                  {props.baskets.map((data) => (
        <div key={data._id}>
          <span>{data.name}</span>
          <span>{data.remarks}</span>
        </div>
      ))}
        </Aside__Box>
        
      </Aside>
      
    </Full>
  );
}
