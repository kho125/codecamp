import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  AvatarLeft,
  AvatarRight,
  Info,
  Seller,
  // Buyer,
  Date,
  LinkIcon,
  LocationIcon,
  Banner,
  Hr,
  NameRemarksWrapper,
  Remarks,
  Name,
  Price,
  Contents,
  HeartIcon,
  HeartCount,
  HeartRitgh,
  Product__Contents,
  // NameRemarksPriceWrapper,
  MainPicture,
  Picture,
  PictureAllWrapper,
  PictureWrapper,
  TagsWrapper,
  Tags,
  Map,
  MapWrapper,
  ButtonWrapper,
  ButtonRow,
} from "./ProductDetail.styles";
import DOMPurify from "dompurify";
import Button01 from "../../../commons/buttons/Button01";
import KakaomapDetail from "../../../commons/kakaomapDetail";
import { Tooltip } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetailUI(props) {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <Wrapper>
      <AvatarWrapper>
        <AvatarLeft>
          <Avatar src="/images/avatar.png" />
          <Info>
            <Seller>
              {props.data ? props.data.fetchUseditem.seller.name : "111"}
            </Seller>
            <Date>
              {props.data ? props.data.fetchUseditem.remarks : "12121"}
            </Date>
          </Info>
        </AvatarLeft>
        <AvatarRight>
          {/* <Buyer>
            구입자:
            {props.data
              ? props.data.fetchUseditem.buyer
                ? props.data.fetchUseditem.buyer.name
                : "244"
              : "343"}
          </Buyer> */}
          <LinkIcon src="/images/boards/detail/link.png" />
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
          >
            <LocationIcon src="/images/boards/detail/location.png" />
          </Tooltip>
        </AvatarRight>
      </AvatarWrapper>

      <Hr></Hr>
      <Product__Contents>
        <NameRemarksWrapper>
          <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
          <Name>{props.data?.fetchUseditem.name}</Name>

          <Price>{props.data?.fetchUseditem.price}원</Price>
        </NameRemarksWrapper>
        <HeartRitgh>
          <HeartIcon
            src="/images/boards/detail/heart.png"
            onClick={props.toggle}
            istoggled={props.istoggled}
          />
          <HeartCount>{props.data?.fetchUseditem.likeCount}</HeartCount>
        </HeartRitgh>
      </Product__Contents>

      {/* <Banner>
        <Slider {...settings}>
          <MainPicture
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
          />
          <PictureWrapper>
            {props.data?.fetchUseditem.images?.map((data: string) => (
              <Picture
                key={data}
                src={`https://storage.googleapis.com/${data}`}
              />
            ))}
          </PictureWrapper>
        </Slider>
      </Banner> */}

      <PictureAllWrapper>
        <MainPicture
          src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
        />
        <PictureWrapper>
          {props.data?.fetchUseditem.images?.map((data: string) => (
            <Picture
              key={data}
              src={`https://storage.googleapis.com/${data}`}
            />
          ))}
        </PictureWrapper>
      </PictureAllWrapper>

      {typeof window !== "undefined" && (
        <Contents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
          }}
        />
      )}

      <TagsWrapper>
        <Tags>{props.data?.fetchUseditem.tags}</Tags>
      </TagsWrapper>

      <Hr></Hr>
      <MapWrapper>
        <KakaomapDetail data={props.data} />
      </MapWrapper>
      <Hr></Hr>
      <ButtonWrapper>
        <ButtonRow>
          <Button01 buttonName="목록으로" gotowhere={props.gotoMain} />
          <Button01 buttonName="구매하기" gotowhere={props.purchase} />
        </ButtonRow>
      </ButtonWrapper>
    </Wrapper>
  );
}

// import {
//   Wrapper,
//   Detail,
//   Header,
//   AvatarWrapper,
//   Avatar,
//   Info,
//   Writer,
//   CreatedAt,
//   IconWrapper,
//   LinkIcon,
//   LocationIcon,
//   Product__Info,
//   Product__Left,
//   Contents,
//   Name,
//   Price,
//   Product__Right,
//   HeartIcon,
//   HeartCount,
//   Banner,
//   MainPicture,
//   Picture,
//   PictureWrapper,
//   Images,
//   Images__1,
//   Images__2,
//   Images__3,
//   Images__4,
//   Tags,
//   Tag,
//   Bar,
//   Map,
//   Bar2,
//   Button,
//   Button__List,
//   Button__Repair,
// } from "./ProductDetail.styles";
// import { IProductDetailUIProps } from "./ProductDetail.types";
// import { Tooltip } from "antd";
// // import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import DOMPurify from "dompurify";
// import Button01 from "../../../commons/buttons/Button01";
// import KakaomapDetail from "../../../commons/kakaomapDetail";

// export default function ProductDetailUI(props: IProductDetailUIProps) {
//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   // };
//   return (
//     <>
//       <Wrapper>
//         <Detail>
//           <Header>
//             <AvatarWrapper>
//               <Avatar src="/images/avatar.png" />
//               <Info>
//                 <Writer>
//                   {/* {props.data ? props.data.fetchUseditem.seller.name : "111"} */}
//                   {props.data?.props.data.fetchUseditem.seller.name}
//                 </Writer>
//                 <CreatedAt>
//                   {/* {props.data ? props.data.fetchUseditem.remarks : "12121"} */}
//                   {props.data?.props.data.fetchUseditem.remarks}
//                 </CreatedAt>
//               </Info>
//             </AvatarWrapper>

//             <IconWrapper>
//               <LinkIcon src="/images/boards/detail/link.png" />
//               <Tooltip
//                 placement="topRight"
//                 title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
//               >
//                 <LocationIcon src="/images/boards/detail/location.png" />
//               </Tooltip>
//             </IconWrapper>
//           </Header>

//           <Product__Info>
//             <Product__Left>
//               {/* <Contents>2019 LTE 32GB</Contents>
//               <Product>삼성전자 갤럭시탭A 10.1</Product>
//               <Price>240,120원</Price> */}
//               <Contents>{props.data?.fetchUseditem.contents}</Contents>
//               <Name>{props.data?.fetchUseditem.name}</Name>
//               <Price>{props.data?.fetchUseditem.price}</Price>
//             </Product__Left>

//             <Product__Right>
//               <HeartIcon onClick={props.onClickLike} />
//               <HeartCount>{props.data?.fetchBoard.likeCount}</HeartCount>
//               {/* <HeartIcon src="/images/boards/detail/heart.png" /> */}
//               {/* <HeartCount>20</HeartCount> */}
//             </Product__Right>
//           </Product__Info>

//           <Banner>
//             {/* <Slider {...settings}> */}

//             <MainPicture
//               src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
//             />
//             <PictureWrapper>
//               {props.data?.fetchUseditem.images?.map((data: string) => (
//                 <Picture
//                   key={data}
//                   src={`https://storage.googleapis.com/${data}`}
//                 />
//               ))}
//             </PictureWrapper>
//             {/* </Slider> */}
//           </Banner>
//           <Images>
//             <Images__1></Images__1>
//             <Images__2></Images__2>
//             <Images__3></Images__3>
//             <Images__4></Images__4>
//           </Images>

//           {/* <PContents> */}
//           {/* <Product__Contents>
//               {props.data?.fetchBoard.contents}
//             </Product__Contents> */}
//           {/* <Product__Contents>
//               <p>
//                 액정에 잔기스랑 주변부 스크레치있습니다만 예민하신분아니면 전혀
//                 신경쓰이지않을정도입니다
//                 <br /> 박스 보관중입니다
//                 <br /> 메모용과 넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나
//                 문제점을 못느꼈네요 잘 안써서 싸게넘깁니다
//                 <br />
//                 택배거래안합니다
//               </p>
//             </Product__Contents>
//           </PContents> */}

//           {typeof window !== "undefined" && (
//             <Contents
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
//               }}
//             />
//           )}

//           <Tags>
//             <Tag>#삼성전자 #갤럭시탭 #갓성비</Tag>
//           </Tags>
//           <Bar></Bar>
//           <Map>
//             <KakaomapDetail data={props.data} />
//           </Map>
//           <Bar2></Bar2>

//           <Button>
//             {/* <Button__List>목록으로</Button__List>
//             <Button__Repair>수정하기</Button__Repair> */}
//             <Button01 buttonName="목록으로" gotowhere={props.gotoMain} />
//             <Button01 buttonName="구매하기" gotowhere={props.purchase} />
//           </Button>
//         </Detail>
//       </Wrapper>
//     </>
//   );
// }
