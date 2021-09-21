import {
  Full,
  Wrapper,
  Main,
  BannerWrapper,
  Best__Title,
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
  // TextToken,
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
import BuildManifestPlugin from "next/dist/build/webpack/plugins/build-manifest-plugin";
import LayoutNavigation from "../../../commons/banner/LayoutBanner.container";
import InfiniteScroll from "react-infinite-scroller";
import ProductMainBest from '../../mainBest/ProductMainBest.container';

export default function ProductMainUI(props: IProductMainUIProps) {
  return (
    <Full>
      <Main>
    <Wrapper>
        <Best__Title>베스트 상품</Best__Title>
    <ProductMainBest />
        {/* <Best__Boxs>
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
        {/* <BannerWrapper>
          <LayoutNavigation best={props.best} />
        </BannerWrapper> */}
        
        <Searchbars02
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />

<InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={props.hasMore}
        >
        <Products>
          <Bar></Bar>
            {props.item?.fetchUseditems.map((data) => (
            <>
              <Sale key={data._id}>
                <Sale2>
                  <Image
                    key={data._id}
                    id={data._id}
                    src={`https://storage.googleapis.com/${data.images.[0]}`}
                    onClick={props.onClickMoveToProductDetail}
                  />
                  <Product>
                    <Name id={data._id} onClick={props.onClickMoveToProductDetail}>{data.name}</Name>
                    <Remarks id={data._id} onClick={props.onClickMoveToProductDetail}>{data.remarks}</Remarks>
                    <Contents id={data._id} onClick={props.onClickMoveToProductDetail}>{data.contents}</Contents>
                    <Tag id={data._id} onClick={props.onClickMoveToProductDetail}>{data.tags}</Tag>
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
                  <Price__Img src="/images/boards/detail/price.png" />
                  <Money>{data.price}원</Money>
                </Price>
              </Sale>
              <Bar></Bar>
            </>
          ))}
        </Products>
          </InfiniteScroll>

        <Button onClick={props.onClickMoveToProductNew}>
          <Registration>상품 등록하기</Registration>
        </Button>
        
    </Wrapper>
      </Main>
      <Aside>
        <Aside__Title>오늘 본 상품s</Aside__Title>
        <Aside__Box>
          {/* <Aside__Heart>
            <Aside__Heart__Icon src="/images/boards/detail/heart.png" />
            <Aside__Heart__Count>{data.pickedCount}</Aside__Heart__Count>
          </Aside__Heart>
          <Aside__Image {data.images.[0]}/>
          <Aside__Name>{data.name}</Aside__Name>
          <Aside__Contents>{data.contents}</Aside__Contents>
          <Aside__Price>{data.price}</Aside__Price>
          <Aside__Tag>{data.tags}</Aside__Tag> */}
        </Aside__Box>


        <Aside__Box>
        {/* {props.baskets.map((data) => (
        <div key={data._id}>
          <span>{data.name}</span>
          <span>{data.remarks}</span>
        </div>
      ))} */}
        </Aside__Box>
        
      </Aside>
      
    </Full>
  );
}
