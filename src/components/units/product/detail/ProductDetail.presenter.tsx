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
            {/* <Seller>{props.data?.fetchUseditem.seller.name}</Seller> */}
            <Date>
              {/* {getDate(props.data?.fetchUseditem.createdAt)} */}
              {props.data?.fetchUseditem.createdAt}
            </Date>
          </Info>
        </AvatarLeft>
        <AvatarRight>
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

// ------------------------------------------------------------------------=-=-=-==-=-=-=-=-=-=-=-=-=-=

// import { getDate } from "../../../../commons/libraries/utils";
// import DOMPurify from "dompurify";
// import {
//   Wrapper,
//   Contents,
//   TopContentsWriter,
//   WriterProfileImg,
//   WriterInfo,
//   Name,
//   Date,
//   WriterIcon,
//   LinkIcon,
//   MapIcon,
//   MainContentsProduct,
//   ProductInfo,
//   Map,
//   InfoTop,
//   InfoTopLeft,
//   Title1,
//   Title2,
//   Price,
//   InfoTopRight,
//   LikeBtn,
//   LikeCount,
//   InfoMiddle,
//   MainImage,
//   SubImage,
//   InfoBottom,
//   InfoText,
//   InfoTags,
//   BottomBtn,
//   ButtonBox,
// } from "./ProductDetail.styles";
// import KakaoMap01 from "../../../commons/kakaomapDetail";

// export default function MarketDetailUI(props: any) {
//   return (
//     <Wrapper>
//       <Contents>
//         {/* ------------- 상단 판매자 정보 START --------------- */}
//         <TopContentsWriter>
//           <WriterProfileImg src="/images/avatar.png" />
//           <WriterInfo>
//             <Name>{props.data?.fetchUseditem.seller.name}</Name>
//             <Date>{getDate(props.data?.fetchUseditem.createdAt)}</Date>
//           </WriterInfo>
//           <WriterIcon>
//             {/*---- 우측 픽토그램 ---*/}

//             <LinkIcon src="/images/icon_link.png" />
//             <MapIcon src="/images/icon_location.png" alt="작성자 주소" />
//           </WriterIcon>
//         </TopContentsWriter>
//         {/* ------------- 상단 판매자 정보 END --------------- */}

//         <MainContentsProduct>
//           <ProductInfo>
//             <InfoTop>
//               <InfoTopLeft>
//                 <Title1>{props.data?.fetchUseditem.remarks}</Title1>
//                 <Title2>{props.data?.fetchUseditem.name} </Title2>
//                 <Price>{props.data?.fetchUseditem.price}</Price>
//               </InfoTopLeft>
//               <InfoTopRight>
//                 <LikeBtn
//                   src="/images/icon_like_2.png"
//                   onClick={props.onClickToggle}
//                 />
//                 <LikeCount>{props.data?.fetchUseditem.pickedCount}</LikeCount>
//               </InfoTopRight>
//             </InfoTop>

//             {/* // ! ---- images ---- */}
//             <InfoMiddle>
//               {props.data?.fetchUseditem.images.map((data: any) => (
//                 <MainImage
//                   key={data}
//                   src={`https://storage.googleapis.com/${data}`}
//                 />
//               ))}

//               {/* <SubImage> </SubImage> */}
//             </InfoMiddle>

//             {/* // ! ---- bottom txt ----  */}
//             <InfoBottom>
//               {typeof window !== "undefined" ? (
//                 <InfoText
//                   dangerouslySetInnerHTML={{
//                     __html: DOMPurify.sanitize(
//                       props.data?.fetchUseditem.contents
//                     ),
//                   }}
//                 />
//               ) : (
//                 <div />
//               )}
//               <InfoTags>{props.data?.fetchUseditem.tags}</InfoTags>
//             </InfoBottom>
//           </ProductInfo>
//           <Map>
//             <KakaoMap01 isDetail={true} />
//           </Map>
//         </MainContentsProduct>

//         {/* --------- 하단 버튼 start ---------- */}
//         <BottomBtn>
//           <ButtonBox onClick={props.onClickMoveToList}>목록으로</ButtonBox>
//           <ButtonBox>수정하기</ButtonBox>
//           <ButtonBox onClick={props.onClickDelete}>삭제하기</ButtonBox>
//         </BottomBtn>
//       </Contents>
//     </Wrapper>
//   );
// }
