import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1902px; */
  // margin은 나중에 설정할듯,
  margin-top: 100px;
  margin-left: 100px;
  padding-top: 82px;
  padding-left: 102px;
  padding-right: 102px;
  border: 1px solid;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.7);
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const NameRemarksWrapper = styled.div`
  height: 67px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameRemarksPriceWrapper = styled.div`
  height: 128px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const AvatarLeft = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AvatarRight = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Date = styled.div`
  height: 24px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const Hr = styled.hr``;
export const Remarks = styled.div`
  height: 27px;
  font-size: 16px;

  color: grey;
`;

export const Name = styled.div`
  height: 36px;
  font-size: 24px;

  color: blue;
`;

export const Price = styled.div`
  height: 53px;
  font-size: 36px;

  color: red;
`;

export const Contents = styled.div`
  width: 792px;
  margin-top: 80px;
`;
export const Seller = styled.div`
  height: 36px;
  //margin-top: 80px;
  font-weight: 500;
  font-size: 24px;
`;
// export const Buyer = styled.div`
//   height: 36px;
//   font-weight: 500;
//   font-size: 24px;
// `;
export const MainPicture = styled.img`
  width: 384px;
  height: 384px;
  background-color: black;
`;
export const Picture = styled.img`
  width: 78px;
  height: 78px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: green;
`;

export const PictureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const PictureAllWrapper = styled.div`
  width: 100%;
  height: 482px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TagsWrapper = styled.div`
  height: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Tags = styled.div`
  font-size: 16px;
  color: grey;
`;
export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Map = styled.div`
  width: 792px;
  height: 360px;
  margin-top: 80px;
  margin-bottom: 76px;
  background-color: yellow;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonRow = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

// import styled from "@emotion/styled";
// // import ReactPlayer from "react-player";

// export const Wrapper = styled.div`
//   width: 1200px;
//   height: 1800px;
//   margin: 100px;
// `;

// export const Detail = styled.div`
//   border: 1px solid black;
//   padding: 80px 102px 100px 102px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: none;
//   box-shadow: 0 0 10px gray;
// `;

// export const Header = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #bdbdbd;
//   padding-bottom: 20px;
// `;

// export const AvatarWrapper = styled.div`
//   display: flex;
// `;

// export const Avatar = styled.img`
//   margin-right: 16px;
// `;

// export const Info = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// export const Writer = styled.div`
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 24px;
// `;

// export const CreatedAt = styled.div`
//   color: #bdbdbd;
// `;

// export const IconWrapper = styled.div`
//   text-align: center;
// `;

// export const LinkIcon = styled.img`
//   margin-right: 15px;
// `;

// export const LocationIcon = styled.img``;

// export const Product__Info = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   /* border-bottom: 1px solid #bdbdbd; */
//   padding-bottom: 20px;
// `;

// export const Product__Left = styled.div``;

// export const Contents = styled.div`
//   margin-top: 20px;
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 27px;
//   color: #bdbdbd;
// `;

// export const Name = styled.div`
//   margin-top: 4px;
//   font-weight: bold;
//   font-size: 24px;
//   line-height: 36px;
//   color: #4f4f4f;
// `;

// export const Price = styled.div`
//   margin-top: 8px;
//   font-weight: bold;
//   font-size: 36px;
//   line-height: 53px;
// `;

// export const Product__Right = styled.div``;

// export const HeartIcon = styled.img`
//   margin-right: 37px;
// `;

// export const HeartCount = styled.div`
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 27px;
//   margin: 3.87px 0 0 5px;
// `;

// export const Banner = styled.div`
//   width: 384px;
//   height: 384px;
//   padding: 44px;
//   margin-top: 80px;
// `;

// export const Slider = styled.div``;

// export const MainPicture = styled.img`
//   width: 384px;
//   height: 384px;
//   background-color: black;
// `;

// export const Picture = styled.img`
//   width: 78px;
//   height: 78px;
//   margin-left: 12px;
//   margin-right: 12px;
//   background-color: green;
// `;

// export const PictureWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

// export const Images = styled.div`
//   margin-top: 20px;
//   margin-bottom: 80px;
//   display: flex;
// `;

// export const Images__1 = styled.div`
//   margin-right: 24px;
//   width: 78px;
//   height: 78px;
//   background-color: #ddd;
// `;

// export const Images__2 = styled.div`
//   margin-right: 24px;
//   width: 78px;
//   height: 78px;
//   background-color: #ddd;
// `;

// export const Images__3 = styled.div`
//   margin-right: 24px;
//   width: 78px;
//   height: 78px;
//   background-color: #ddd;
// `;

// export const Images__4 = styled.div`
//   margin-right: 24px;
//   width: 78px;
//   height: 78px;
//   background-color: #ddd;
// `;

// export const PContents = styled.div`
//   display: flex;
//   margin-bottom: 40px;
// `;

// export const Product__Contents = styled.div``;

// export const Tags = styled.div`
//   margin-right: 400px; // 고쳐야됨
//   margin-bottom: 40px;
// `;

// export const Tag = styled.div`
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 24px;
//   color: #bdbdbd;
// `;

// export const Bar = styled.div`
//   margin-bottom: 80px;
//   width: 590px;
//   border: 1px solid #bdbdbd;
// `;

// export const Map = styled.div`
//   margin-bottom: 76px;
//   width: 590px;
//   height: 262px;
//   background-color: #ddd;
// `;

// export const Bar2 = styled.div`
//   margin-bottom: 84px;
//   width: 590px;
//   border: 1px solid #bdbdbd;
// `;

// export const Button = styled.div``;

// export const Button__List = styled.button`
//   margin-right: 24px;
//   width: 160px;
//   height: 45px;
//   border: none;
//   background-color: #bdbdbd;
//   cursor: pointer;
//   transition: 0.3s;
//   :hover {
//     box-shadow: 1px 1px 1px;
//     transition: 0.3s;
//   }
// `;

// export const Button__Repair = styled.button`
//   width: 160px;
//   height: 45px;
//   border: none;
//   background-color: #ffd600;
//   cursor: pointer;
//   transition: 0.3s;
//   :hover {
//     box-shadow: 1px 1px 1px;
//     transition: 0.3s;
//   }
// `;
