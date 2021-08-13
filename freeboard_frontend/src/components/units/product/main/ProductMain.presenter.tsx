import {
  Full,
  Wrapper,
  Main,
  Best__Title,
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
  Products,
  Bar,
  Sale,
  Sale2,
  Image,
  Product,
  Name,
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

export default function ProductMainUI(props: IProductMainUIProps) {
  return (
    <Full>
      <Main>
    <Wrapper>
        <Best__Title>베스트 상품</Best__Title>
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
        </Best__Boxs>

        <Searchbars02
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />

        <Products>
          <Bar></Bar>
          {props.data?.fetchUseditems.map((data) => (
            <>
              <Sale>
                <Sale2>
                  <Image
                    key={data}
                    src={`https://storage.googleapis.com/${data.images.[0]}`}
                  />
                  <Product>
                    <Name>{data.name}</Name>
                    <Contents>{data.Contents}</Contents>
                    <Tag>{data.tags}</Tag>
                    <User>
                      <User__Img src="/images/boards/best/user.png" />
                      <User__Name>판매자</User__Name>
                      <Heart__Icon2 src="/images/boards/detail/heart.png" />
                      <Heart__Count2>20</Heart__Count2>
                    </User>
                  </Product>
                </Sale2>
                <Price>
                  <Price__Img src="/images/boards/detail/price.png" />
                  <Money>{data.price}</Money>
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
          
        </Aside__Box>
        
      </Aside>
      
    </Full>
  );
}
