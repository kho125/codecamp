import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import { GlobalContext } from "../../../../pages/_app";

const inputsInit = {
  email: "",
  password: "",
};

export default function Login() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [inputs, setInputs] = useState(inputsInit);
  const [inputsErrors, setInputsErrors] = useState(inputsInit);
  const [loginuser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);

  function onChangeInputs(event) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
    if (newInputs.email !== "" && newInputs.password !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickSubmit(event) {
    setInputsErrors({
      email: /\w+@\w+\.com$/.test(inputs.email)
        ? ""
        : "이메일이 잘못되었습니다.",
      password: /^[a-zA-Z0-9]{8,16}$/.test(inputs.password)
        ? ""
        : "8~16자리로 입력해주세요",
    });

    try {
      const result = await loginuser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });

      setAccessToken(result.data?.loginUser.accessToken || "");
      localStorage.setItem(
        "accessToken",
        result.data?.loginUser.accessToken || ""
      );

      // console.log(result.data?.loginUser.accessToken);
      alert("로그인성공");
      router.push("/product/main");
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickMoveTosignup() {
    router.push("/signup");
  }

  return (
    <LoginUI
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      inputsErrors={inputsErrors}
      active={active}
      onClickMoveTosignup={onClickMoveTosignup}
    />
  );
}
