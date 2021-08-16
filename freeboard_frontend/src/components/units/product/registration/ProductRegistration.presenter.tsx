import {
  Wrapper,
  Registration,
  Product,
  Product__Input,
  Contents,
  Contents__Input,
  Explanation,
  ReactQuill__Input,
  Price,
  Price__Input,
  Tag,
  Tag__Input,
  Location,
  Location__Left,
  Location__Title,
  Map,
  Location__Right,
  GPS,
  GPSs,
  LAT__Input,
  GPS__Icon,
  LNG__Input,
  Address,
  Address__Input,
  ImageWrapper,
  Label,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
  Error,
} from "./ProductRegistration.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { IRegistrationUIProps } from "./ProductRegistration.types";
import { useContext } from "react";
import { ProductEditPageContext } from "../../../../../pages/product-registration/[productId]/edit";

export default function RegistrationUI(props: IRegistrationUIProps) {
  const { isEdit, data } = useContext(ProductEditPageContext);

  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapper>
        <Registration>
          {/* {isEdit ? "상품 등록하기" : "상품 수정하기"} */}
          상품 등록하기
        </Registration>

        <Product>상품명</Product>
        <Product__Input
          name="name"
          type="text"
          placeholder="상품명을 작성해주세요."
          defaultValue={data?.fetchUseditems.product || ""}
          onChange={props.onChangeInputs}
        />
        <Error>{props.inputsErrors.product}</Error>

        <Contents>한줄요약</Contents>
        <Contents__Input
          name="remarks"
          type="text"
          placeholder="상품내용을 작성해주세요."
          defaultValue={data?.fetchUseditems.remarks || ""}
          onChange={props.onChangeInputs}
        />
        <Error>{props.inputsErrors.remarks}</Error>

        <Explanation>상품설명</Explanation>
        <ReactQuill__Input
          name="contents"
          type="text"
          placeholder="상품내용을 작성해주세요."
          defaultValue={data?.fetchUseditems.contents || ""}
          onChange={props.onChangeContents}
        />
        <Error>{props.inputsErrors.contents}</Error>

        <Price>판매가격</Price>
        <Price__Input
          name="price"
          type="text"
          placeholder="가격을 작성해주세요."
          defaultValue={data?.fetchUseditems.price || ""}
          onChange={props.onChangeInputs}
        />
        <Error>{props.inputsErrors.price}</Error>

        <Tag>태그입력</Tag>
        <Tag__Input
          name="tags"
          type="text"
          placeholder="태그를 작성해주세요."
          defaultValue={data?.fetchUseditems.tags || ""}
          onChange={props.onChangeInputs}
        />
        <Error>{props.inputsErrors.tags}</Error>

        <Location>
          <Location__Left>
            <Location__Title>거래위치</Location__Title>
            <Map></Map>
          </Location__Left>

          <Location__Right>
            <GPS>GPS</GPS>
            <GPSs>
              <LAT__Input placeholder="위도(LAT)" />
              <GPS__Icon src="/images/boards/detail/location.png" />
              <LNG__Input placeholder="경도(LNG)" />
            </GPSs>

            <Address>주소</Address>
            <Address__Input />
            <Address__Input />
          </Location__Right>
        </Location>
        <ImageWrapper>
          <Label>사진첨부</Label>
          {new Array(2).fill(1).map((data, index) => (
            <Uploads01
              key={`${data}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
            />
          ))}
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인 사진 설정</Label>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진 1</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진 2</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton
            onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}
            active={props.active}
          >
            {/* {isEdit ? "등록하기" : "등록하기"} */}
            등록하기
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
