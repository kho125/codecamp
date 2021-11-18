import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../commons/hocs/withGlobalContext";
import ProfileUI from "./profile.presenter";
import {
  LOGOUT_USER,
  RESET_USER_PASSWORD,
  UPDATE_USER,
  UPLOAD_FILE,
} from "./profile.queries";

export default function Profile() {
  const router = useRouter();
  const { userInfo, setUserInfo, setAccessToken } = useContext(GlobalContext);
  const [updateUser] = useMutation(UPDATE_USER);
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const PASSWORD_INPUTS_INIT = {
    password: "",
    newPassword: "",
    checkNewPassword: "",
  };
  const [inputs, setInputs] = useState(PASSWORD_INPUTS_INIT);
  const [inputErrors, setInputErrors] = useState(PASSWORD_INPUTS_INIT);
  const [fileUrl, setFileUrl] = useState("");
  const onClickProfileImg = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            picture: file,
          },
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  // @ts-ignore
  const onChangeFile = async (event) => {
    setFile(event.target.files[0]);
    const image = await uploadFile({
      variables: { file: event.target.files[0] },
    });
    setFile("https://storage.googleapis.com/" + image.data?.uploadFile?.url);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = (data) => {
      // console.log(data?.target?.result);
      setFileUrl(data.target?.result as string);
      // props.onChangeFiles(file, props.index);
    };
  };

  const onChangeName = (event: any) => {
    setName(event.target.value);
  };
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    console.log(inputs);
  };

  const onClickChangeNickName = () => {
    updateUser({
      variables: {
        updateUserInput: {
          name: name,
        },
      },
    });
  };
  const onClickChangePassword = async () => {
    setInputErrors({
      password: inputs.password ? "" : "* 필수 입력사항 입니다",
      newPassword: inputs.newPassword ? "" : "* 필수 입력사항 입니다",
      checkNewPassword: inputs.checkNewPassword ? "" : "* 필수 입력사항 입니다",
    });
    if (
      inputs.newPassword !== "" &&
      inputs.newPassword === inputs.checkNewPassword
    ) {
      // if (inputs.newPassword && inputs.checkNewPassword) {
      try {
        await resetUserPassword({
          variables: {
            password: inputs.newPassword,
          },
        });
        alert("바뀐 비밀번호로 다시 로그인해주세요");
        // @ts-ignore
        setAccessToken("");
        setUserInfo({});
        sessionStorage.setItem("refreshToken", "");
        sessionStorage.setItem("userInfo", "");
        logoutUser();
        router.push("/market/");
      } catch (error) {
        alert(error.message);
      }
    }
  };
  return (
    <>
      <ProfileUI
        fileUrl={fileUrl}
        inputs={inputs}
        inputErrors={inputErrors}
        onChangeInputs={onChangeInputs}
        userInfo={userInfo}
        onChangeName={onChangeName}
        onClickChangeNickName={onClickChangeNickName}
        onClickChangePassword={onClickChangePassword}
        onClickProfileImg={onClickProfileImg}
        onChangeFile={onChangeFile}
      />
    </>
  );
}
