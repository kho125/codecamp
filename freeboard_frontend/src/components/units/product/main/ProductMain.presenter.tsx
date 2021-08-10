import {
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
  Searchs,
  Search__Left,
  Onsale,
  Soldout,
  Search__Right,
  Search__Input,
  Date__Input,
  Search__Button,
  Products,
  Bar,
  Sale,
  Sale2,
  Img,
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
  Button,
  Registration,
} from "./ProductMain.styles";
import { IProductMainUIProps } from "./ProductMain.types";

export default function ProductMainUI(props: IProductMainUIProps) {
  return (
    <Wrapper>
      <Main>
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

        <Searchs>
          <Search__Left>
            <Onsale>판매중상품</Onsale>
            <Soldout>판매된상품</Soldout>
          </Search__Left>

          <Search__Right>
            <Search__Input placeholder="제품을 검색해주세요." />
            <Date__Input />
            <Search__Button>검색</Search__Button>
          </Search__Right>
        </Searchs>

        <Products>
          <Bar></Bar>
          <Sale>
            <Sale2>
              <Img src="/images/boards/detail/Tap.png" />
              <Product>
                <Name>삼성전자 갤럭시탭A 10.1</Name>
                <Contents>2019 LTE 32GB</Contents>
                <Tag>#삼성전자 #갤럭시탭 #갓성비</Tag>
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
              <Money>240,120원</Money>
            </Price>
          </Sale>

          <Bar></Bar>
          <Sale>
            <Sale2>
              <Img src="/images/boards/detail/msi.png" />
              <Product>
                <Name>MSI MPG Z490 게이밍 엣지</Name>
                <Contents>인텔 CPU용</Contents>
                <Tag>#해외구매 #가성비 #최저가</Tag>
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
              <Money>274,260원</Money>
            </Price>
          </Sale>

          <Bar></Bar>
          <Sale>
            <Sale2>
              <Img src="/images/boards/detail/lego.png" />
              <Product>
                <Name>레고 오버워치 레킹 볼 (75976) (정품)</Name>
                <Contents>게임보다 더 귀여움 실화?</Contents>
                <Tag>#짱귀여움 #오버워치 #그랜드마스터 #내가 진짜</Tag>
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
              <Money>28,370원</Money>
            </Price>
          </Sale>
          <Bar></Bar>
          <Sale>
            <Sale2>
              <Img src="/images/boards/detail/gbook.png" />
              <Product>
                <Name>갤럭시북 플렉스 알파 NT750QCR-A78A </Name>
                <Contents>단하루139만+GIFT</Contents>
                <Tag>#하루만 #에누리 #가능 #대신 배송비 받음</Tag>
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
              <Money>1,684,620원</Money>
            </Price>
          </Sale>
          <Bar></Bar>
          <Sale>
            <Sale2>
              <Img src="/images/boards/detail/keyboard.png" />
              <Product>
                <Name>ABKO HACKER K590 축교환 LED 게이밍 기계식 키보드</Name>
                <Contents>단하루139만+GIFT</Contents>
                <Tag>#짱귀여움 #오버워치 #그랜드마스터 #내가 진짜</Tag>
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
              <Money>24,000원</Money>
            </Price>
          </Sale>
          <Bar></Bar>
        </Products>

        {/* <Button> */}
        <Registration
          buttonX={props.buttonX}
          buttonY={props.buttonY}
          ref={props.buttonRef}
          onMouseMove={props.onMouseMoveButton}
        >
          상품 등록하기
        </Registration>
        {/* </Button> */}
      </Main>
    </Wrapper>
  );
}
