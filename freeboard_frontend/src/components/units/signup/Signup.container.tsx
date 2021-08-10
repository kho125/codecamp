import SignupUI from "./Signup.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Signup.queries";
import router from "next/router";

const inputsInit = {
  email: "",
  name: "",
  password: "",
  repassword: "",
};

export default function Signup() {
  const [active, setActive] = useState(false);
  const [inputs, setInputs] = useState(inputsInit);
  const [inputsErrors, setInputsErrors] = useState(inputsInit);
  const [createuser] = useMutation(CREATE_USER);

  function onChangeInputs(event) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
    if (
      newInputs.email !== "" &&
      newInputs.name !== "" &&
      newInputs.password !== "" &&
      newInputs.repassword !== ""
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickSubmit(event) {
    console.log(inputs);

    setInputsErrors({
      email: /\w+@\w+\.com$/.test(inputs.email)
        ? ""
        : "이메일 형식이 올바르지 않습니다.",
      name: inputs.name ? "" : "이름을 적어주세요.",
      password: /^[a-zA-Z0-9]{8,16}$/.test(inputs.password)
        ? ""
        : "8~16자리로 입력해주세요.",
      repassword:
        inputs.password === inputs.repassword ? "" : "비밀번호가 다릅니다",
    });

    const isEvery = Object.values(inputs).every((data) => data);
    if (!isEvery) return;

    try {
      const result = await createuser({
        variables: {
          aaa: {
            email: inputs.email,
            name: inputs.name,
            password: inputs.password,
          },
        },
      });
      alert("완료되었습니다.");
      router.push("/login");
      alert(result.data.createUser._id);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <SignupUI
      active={active}
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      inputsErrors={inputsErrors}
    />
  );
}
