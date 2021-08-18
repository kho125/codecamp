// import {
//   Wrapper,
//   Registration,
//   Product,
//   Product__Input,
//   Contents,
//   Contents__Input,
//   Explanation,
//   Price,
//   Price__Input,
//   Tag,
//   Tag__Input,
//   Location,
//   Location__Left,
//   Location__Title,
//   Map,
//   Location__Right,
//   GPS,
//   GPSs,
//   LAT__Input,
//   GPS__Icon,
//   LNG__Input,
//   Address,
//   Address__Input,
//   ImageWrapper,
//   Label,
//   OptionWrapper,
//   RadioButton,
//   RadioLabel,
//   ButtonWrapper,
//   SubmitButton,
//   Error,
// } from "./ProductRegistration.styles";
// import { Modal } from "antd";
// import DaumPostcode from "react-daum-postcode";
// import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
// import { IRegistrationUIProps } from "./ProductRegistration.types";
// import { useContext } from "react";
// import { ProductEditPageContext } from "../../../../../pages/product-registration/[productId]/edit";
// import ReactQuill__Input from "./WebEditor";
// import KakaomapWrite from "../../../commons/kakaomapWrite";
// import InputAddress from "../../../commons/inputs/inputAddress";
// import Inputmain from "../../../commons/inputs/Inputmain";
// import InputContent from "../../../commons/inputs/inputAddress";
// import Button01 from "../../../commons/buttons/Button01";
// import InputContent2 from "../../../commons/inputs/inputcontent2";
// import dynamic from "next/dynamic";

// export default function RegistrationUI(props: IRegistrationUIProps) {
//   const { isEdit, data } = useContext(ProductEditPageContext);

//   return (
//     <>
//       {/* {props.isOpen && (
//         <Modal visible={true}>
//           <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
//         </Modal>
//       )} */}
//       {/* <form onSubmit={props.handleSubmit(props.onSubmit)}> */}
//       <Wrapper>
//         <Registration>
//           {isEdit ? "상품 수정하기" : "상품 등록하기"}
//         </Registration>

//         <Product>상품명</Product>
//         <Product__Input
//           name="name"
//           type="text"
//           placeholder="상품명을 작성해주세요."
//           // defaultValue={data?.fetchUseditems.name || ""}
//           onChange={props.onChangeInputs}
//         />
//         <Error>{props.inputsErrors.name}</Error>

//         <Contents>한줄요약</Contents>
//         <Contents__Input
//           name="remarks"
//           type="text"
//           placeholder="상품내용을 작성해주세요."
//           // defaultValue={data?.fetchUseditems.remarks || ""}
//           onChange={props.onChangeInputs}
//         />
//         <Error>{props.inputsErrors.remarks}</Error>

//         <Explanation>상품설명</Explanation>
//         <ReactQuill__Input
//           name="contents"
//           type="text"
//           placeholder="상품내용을 작성해주세요."
//           // defaultValue={data?.fetchUseditems.contents || ""}
//           onChangeInputs={props.onChangeContents}
//         />
//         <Error>{props.inputsErrors.contents}</Error>

//         <Price>판매가격</Price>
//         <Price__Input
//           name="price"
//           type="text"
//           placeholder="가격을 작성해주세요."
//           // defaultValue={data?.fetchUseditems.price || ""}
//           onChange={props.onChangeInputs}
//         />
//         <Error>{props.inputsErrors.price}</Error>

//         <Tag>태그입력</Tag>
//         <Tag__Input
//           name="tags"
//           type="text"
//           placeholder="태그를 작성해주세요."
//           // defaultValue={data?.fetchUseditems.tags || ""}
//           onChange={props.onChangeInputs}
//         />
//         <Error>{props.inputsErrors.tags}</Error>

//         <Location>
//           <Location__Left>
//             <Location__Title>거래위치</Location__Title>
//             <Map></Map>
//           </Location__Left>

//           <Location__Right>
//             <GPS>GPS</GPS>
//             <GPSs>
//               <LAT__Input placeholder="위도(LAT)" />
//               <GPS__Icon src="/images/boards/detail/location.png" />
//               <LNG__Input placeholder="경도(LNG)" />
//             </GPSs>

//             <Address>주소</Address>
//             <Address__Input />
//             <Address__Input />
//           </Location__Right>
//         </Location>
//         <ImageWrapper>
//           <Label>사진첨부</Label>
//           {new Array(2).fill(1).map((data, index) => (
//             <Uploads01
//               key={`${data}_${index}`}
//               index={index}
//               onChangeFiles={props.onChangeFiles}
//             />
//           ))}
//         </ImageWrapper>
//         <OptionWrapper>
//           <Label>메인 사진 설정</Label>
//           <RadioButton type="radio" id="image" name="radio-button" />
//           <RadioLabel htmlFor="image">사진 1</RadioLabel>
//           <RadioButton type="radio" id="image" name="radio-button" />
//           <RadioLabel htmlFor="image">사진 2</RadioLabel>
//         </OptionWrapper>
//         <ButtonWrapper>
//           <SubmitButton
//             onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}
//             active={props.active}
//           >
//             {isEdit ? "수정하기" : "등록하기"}
//             {/* 등록하기 */}
//           </SubmitButton>
//         </ButtonWrapper>
//         {/* </form> */}
//       </Wrapper>
//     </>
//   );
// }

import {
  Wrapper,
  HeadWrapper,
  MapWrapper,
  Title,
  TextInputWrapper,
  NameWrapper,
  Name,
  NameRed,
  Input,
  TextAreaInputWrapper,
  Img,
  InputGPS,
  Box,
  RadioButton,
  RadioLabel,
  AddressWrapper,
  GPSWrapper,
  LatLngWrapper,
  GPSAddressWrapper,
  MapGPSAddressWrapper,
  PictureWrapper,
  SubmitButton,
  ButtonWrapper,
  Logo,
  LogoWrapper,
} from "./ProductRegistration.styles"; //Home.styles 를 가져와랴
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Inputmain from "../../../commons/inputs/Inputmain";
import InputContent from "../../../commons/inputs/inputAddress";
import Button01 from "../../../commons/buttons/Button01";
import InputContent2 from "../../../commons/inputs/inputcontent2";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import KakaomapWrite from "../../../commons/kakaomapWrite";
import InputAddress from "../../../commons/inputs/inputAddress";
export default function ProductWriteUI(props: any) {
  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <HeadWrapper>
          <Title>상품 등록</Title>
        </HeadWrapper>

        <TextInputWrapper>
          <Inputmain
            inputName="상품명"
            type="text"
            register={{ ...props.register("name") }}
            errorMessage={props.errors.name?.message}
          />
        </TextInputWrapper>

        <TextInputWrapper>
          <Inputmain
            inputName="한줄요약"
            type="text"
            register={{ ...props.register("remarks") }}
            errorMessage={props.errors.remarks?.message}
          />
        </TextInputWrapper>

        <TextAreaInputWrapper>
          {/* <InputContent
            inputName="상품설명"
            register={{ ...props.register("contents") }}
            errorMessage={props.errors.contents?.message}
          /> */}
          <InputContent2
            inputName="상품설명"
            aaa={props.onChangeContents}
            errorMessage={props.errors.contents?.message}
          />
        </TextAreaInputWrapper>

        <TextInputWrapper>
          <Inputmain
            inputName="가격"
            type="text"
            register={{ ...props.register("price") }}
            errorMessage={props.errors.price ? "숫자를 입력하시오" : ""}
          />
        </TextInputWrapper>

        <TextInputWrapper>
          <NameWrapper>
            <Name>태그입력</Name>
            <NameRed>태그입력은 해야하나요</NameRed>
          </NameWrapper>

          <Input></Input>
        </TextInputWrapper>

        <MapGPSAddressWrapper>
          <MapWrapper>
            <Name>거래위치</Name>
            <KakaomapWrite setLatLag={props.setLatLag} />
          </MapWrapper>

          <GPSAddressWrapper>
            <GPSWrapper>
              <Name>GPS</Name>
              <LatLngWrapper>
                <InputGPS placeholder="경도LNG" value={props.latLag.lat} />
                <LogoWrapper>
                  <Logo></Logo>
                </LogoWrapper>

                <InputGPS placeholder="위도LAT" value={props.latLag.lag} />
              </LatLngWrapper>
            </GPSWrapper>

            <AddressWrapper>
              <InputAddress
                inputName="주소"
                type="text"
                register={{ ...props.register("address") }}
                errorMessage={props.errors.address?.message}
              />
              <InputAddress
                inputName="상세주소"
                type="text"
                register={{ ...props.register("addressdetail") }}
                errorMessage={props.errors.addressdetail?.message}
              />
            </AddressWrapper>
          </GPSAddressWrapper>
        </MapGPSAddressWrapper>

        <PictureWrapper>
          <Name>사진첨부</Name>
          {new Array(3).fill(1).map((data, index) => (
            <Uploads01
              key={`${data}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
            />
          ))}
        </PictureWrapper>

        <Name>메인사진설정</Name>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
        <ButtonWrapper>
          <Button01
            buttonName="상품 등록"
            type="submit"
            isActive={props.isActive}
          />
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
}
