import { useContext } from "react";
import { UserContext } from "../../../../../pages/_app";
import {
  Contianer,
  Wrapper,
  ProfileImg,
  ProfileImgWrapper,
  Title,
  MainTitle,
  InputWrapper,
  InputTitle,
  ButtonWrapper,
  MyButton,
  MyInput,
} from "./profile.styles";
export default function ProfileUI(props: any) {
  const { userInfo } = useContext(UserContext);
  console.log(props.userInfo);
  return (
    // div 처리 
    <>
      <Contianer>
        <MainTitle>프로필 관리</MainTitle>
        <Wrapper>
          <Title>프로필 사진 변경</Title>
          <ProfileImgWrapper>
            <div>
              <InputTitle>변경하려는 사진파일을 선택 해주세요.</InputTitle>
              <input
                style={{ paddingTop: "30px" }}
                type="file"
                onChange={props.onChangeFile}
              />
            </div>
            <ProfileImg
              src={
                props.fileUrl ||
                userInfo?.fetchUserLoggedIn.picture ||
                "/images/profile/profile.png"
              }
            />
          </ProfileImgWrapper>
          <ButtonWrapper>
            <MyButton onClick={props.onClickProfileImg}>사진 변경</MyButton>
          </ButtonWrapper>
        </Wrapper>
        <Wrapper>
          <Title>닉네임 변경</Title>
          <InputWrapper>
            <InputTitle>닉네임</InputTitle>
            <MyInput
              placeholder={props.userInfo.name}
              onChange={props.onChangeName}
            ></MyInput>
          </InputWrapper>
          <ButtonWrapper>
            <MyButton onClick={props.onClickChangeNickName}>
              닉네임 변경
            </MyButton>
          </ButtonWrapper>
        </Wrapper>

        <Wrapper>
          <Title>비밀번호 변경</Title>
          <InputWrapper>
            <InputTitle>현재 비밀번호</InputTitle>
            <MyInput
              name="password"
              placeholder="현재 비밀번호를 입력하세요"
              onChange={props.onChangeInputs}
            ></MyInput>
            <span style={{ color: "red", fontSize: "12px" }}>
              {props.inputErrors.password}
            </span>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>새 비밀번호</InputTitle>
            <MyInput
              name="newPassword"
              placeholder="새로운 비밀번호를 입력하세요"
              onChange={props.onChangeInputs}
            ></MyInput>
            <span style={{ color: "red", fontSize: "12px" }}>
              {props.inputErrors.newPassword}
            </span>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>새 비밀번호 확인</InputTitle>
            <MyInput
              name="checkNewPassword"
              placeholder="새로운 비밀번호를 다시 입력하세요"
              onChange={props.onChangeInputs}
            ></MyInput>
            <span style={{ color: "red", fontSize: "12px" }}>
              {props.inputErrors.checkNewPassword}
            </span>
          </InputWrapper>
          <ButtonWrapper>
            <MyButton onClick={props.onClickChangePassword}>
              비밀번호 변경
            </MyButton>
          </ButtonWrapper>
        </Wrapper>
      </Contianer>
    </>
  );
}
