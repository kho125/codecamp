import SignupUI from "./Signup.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Signup.queries";

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

    // if (!/\w+@\w+\.\w+/.test(inputs.email)) {
    //   alert("제대로된 이메일 적으세요");
    // } else if (inputs.name === "") {
    //   alert("이름은 있어야지요~");
    // } else if (!/^[a-zA-Z0-9]{8,16}$/.test(inputs.password)) {
    //   alert("비밀번호는 8자리 이상 16자리 이하를 써주세요");
    // } else if (inputs.password !== inputs.repassword) {
    //   alert("비밀번호확인은 제대로 치세요");
    // } else {
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
      alert("회원가입 축하드립니다.");
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
