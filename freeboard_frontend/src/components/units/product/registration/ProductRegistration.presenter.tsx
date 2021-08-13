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
} from "./ProductRegistration.styles";
import Modal from "antd/lib/modal/Modal";
import DaumPostcode from "react-daum-postcode";
import { IRegistrationUIProps } from "./ProductRegistration.types";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { useContext } from "react";
import { BoardsEditPageContext } from "../../../../../pages/boards/[boardId]/edit";

export default function RegistrationUI(props: IRegistrationUIProps) {
  const { isEdit, data } = useContext(BoardsEditPageContext);

  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapper>
        <Registration>상품 등록하기</Registration>
        <Product>상품명</Product>
        <Product__Input
          name="Product"
          type="text"
          placeholder="상품명을 작성해주세요."
          // defaultValue={data?.fetchBoard.Product || ""}
          onChange={props.onChangeInputs}
        />
        <Contents>한줄요약</Contents>
        <Contents__Input placeholder="상품내용을 작성해주세요." />
        <Explanation>상품설명</Explanation>
        <ReactQuill__Input placeholder="상품을 설명해주세요." />

        <Price>판매가격</Price>
        <Price__Input
          // onChange={onChangeContents}
          placeholder="판매 가격을 입력해주세요."
        />
        <Tag>태그입력</Tag>
        <Tag__Input placeholder="#태그 #태그 #태그" />

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
          <RadioLabel htmlFor="youtube">사진 1</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진 2</RadioLabel>
        </OptionWrapper>

        <ButtonWrapper>
          <SubmitButton
            onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}
            active={props.active}
          >
            {isEdit ? "등록하기" : "등록하기"}
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
