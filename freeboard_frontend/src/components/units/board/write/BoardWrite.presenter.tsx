import { ChangeEvent, LegacyRef, MouseEventHandler } from "react";
import {
  Error,
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
} from "./BoardWrite.styles";
import { INPUTS_INIT } from "./BoardWrite.container";
import { IQuery } from "../../../../commons/types/generated/types";
import Modal from "antd/lib/modal/Modal";
import DaumPostcode from "react-daum-postcode";

interface IBoardWriteUIProps {
  fileRef: LegacyRef<HTMLInputElement> | undefined;
  openFile: MouseEventHandler<HTMLButtonElement> | undefined;
  fileRef2: LegacyRef<HTMLInputElement> | undefined;
  openFile2: MouseEventHandler<HTMLButtonElement> | undefined;
  fileRef3: LegacyRef<HTMLInputElement> | undefined;
  openFile3: MouseEventHandler<HTMLButtonElement> | undefined;
  isEdit?: boolean;
  active: boolean;
  zipcode: string;
  address: string;
  inputsErrors: typeof INPUTS_INIT;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: IQuery;
}
export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapper>
        <Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              name="writer"
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeInputs}
              // defaultValue={props.data?.fetchBoard.writer || ""}
              // readOnly={Boolean(props.data?.fetchBoard.writer)}
            />
            <Error>{props.inputsErrors.writer}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangeInputs}
            />
            <Error>{props.inputsErrors.password}</Error>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            name="title"
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeInputs}
            // defaultValue={props.data?.fetchBoard.title}
          />
          <Error>{props.inputsErrors.title}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            name="contents"
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeInputs}
            // defaultValue={props.data?.fetchBoard.contents}
          />
          <Error>{props.inputsErrors.contents}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode name="zipcode" placeholder="07250" value={props.zipcode} />
            <SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </SearchButton>
          </ZipcodeWrapper>
          <Address readOnly />
          <Address onChange={props.onChangeAddressDetail} />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube
            name="youtubeUrl"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeInputs}
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton onClick={props.openFile}>
            <input
              type="file"
              style={{ display: "none" }}
              ref={props.fileRef}
            />
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton onClick={props.openFile2}>
            <input
              type="file"
              style={{ display: "none" }}
              ref={props.fileRef2}
            />
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
          <UploadButton onClick={props.openFile3}>
            <input
              type="file"
              style={{ display: "none" }}
              ref={props.fileRef3}
            />
            <div>+</div>
            <div>Upload</div>
          </UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            active={props.active}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
