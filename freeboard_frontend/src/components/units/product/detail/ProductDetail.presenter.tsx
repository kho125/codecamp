import { Tooltip } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Wrapper,
  Detail,
  Header,
  AvatarWrapper,
  Avatar,
  Info,
  Writer,
  CreatedAt,
  IconWrapper,
  LinkIcon,
  LocationIcon,
  Product__Info,
  Product__Left,
  Contents,
  Product,
  Price,
  Product__Right,
  HeartIcon,
  HeartCount,
  Banner,
  AAA,
  BBB,
  CCC,
  DDD,
  Images,
  Images__1,
  Images__2,
  Images__3,
  Images__4,
  PContents,
  Product__Contents,
  Tags,
  Tag,
  Bar,
  Map,
  Bar2,
  Button,
  Button__List,
  Button__Repair,
} from "./ProductDetail.styles";
import { IProductDetailUIProps } from "./ProductDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Wrapper>
        <Detail>
          <Header>
            <AvatarWrapper>
              <Avatar src="/images/avatar.png" />
              <Info>
                {/* <Writer>{props.data?.fetchBoard.writer}</Writer> */}
                <Writer>판매자</Writer>
                {/* <CreatedAt>{props.data?.fetchBoard.createdAt}</CreatedAt> */}
                <CreatedAt>Date : 2021.02.18</CreatedAt>
              </Info>
            </AvatarWrapper>

            <IconWrapper>
              <LinkIcon src="/images/boards/detail/link.png" />
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
              >
                <LocationIcon src="/images/boards/detail/location.png" />
              </Tooltip>
            </IconWrapper>
          </Header>

          <Product__Info>
            <Product__Left>
              <Contents>2019 LTE 32GB</Contents>
              <Product>삼성전자 갤럭시탭A 10.1</Product>
              <Price>240,120원</Price>
            </Product__Left>

            <Product__Right>
              {/* <HeartIcon onClick={props.onClickLike} />
              <HeartCount>{props.data?.fetchBoard.likeCount}</HeartCount> */}
              <HeartIcon src="/images/boards/detail/heart.png" />
              <HeartCount>20</HeartCount>
            </Product__Right>
          </Product__Info>

          <Banner>
            <Slider {...settings}>
              <AAA>
                <img src="/images/boards/detail/Tap.png" />
              </AAA>
              <BBB></BBB>
              <CCC></CCC>
              <DDD></DDD>
            </Slider>
          </Banner>
          <Images>
            <Images__1></Images__1>
            <Images__2></Images__2>
            <Images__3></Images__3>
            <Images__4></Images__4>
          </Images>

          <PContents>
            {/* <Product__Contents>
              {props.data?.fetchBoard.contents}
            </Product__Contents> */}
            <Product__Contents>
              <p>
                액정에 잔기스랑 주변부 스크레치있습니다만 예민하신분아니면 전혀
                신경쓰이지않을정도입니다
                <br /> 박스 보관중입니다
                <br /> 메모용과 넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나
                문제점을 못느꼈네요 잘 안써서 싸게넘깁니다
                <br />
                택배거래안합니다
              </p>
            </Product__Contents>
          </PContents>

          <Tags>
            <Tag>#삼성전자 #갤럭시탭 #갓성비</Tag>
          </Tags>
          <Bar></Bar>
          <Map></Map>
          <Bar2></Bar2>

          <Button>
            <Button__List>목록으로</Button__List>
            <Button__Repair>수정하기</Button__Repair>
          </Button>
        </Detail>
      </Wrapper>
    </>
  );
}
