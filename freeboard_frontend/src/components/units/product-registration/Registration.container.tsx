// import { useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
import { useState } from "react";
import RegistrationUI from "./Registration.presenter";
// import { useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
// import { ChangeEvent, useState } from "react";
// import {
//   CREATE_BOARD,
//   UPDATE_BOARD,
//   UPLOAD_FILE,
// } from "./Registration.queries";
// import { IRegistrationProps } from "./Registration.types";
// import { Modal } from "antd";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
};

export default function Registration() {
  // const router = useRouter();
  // const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  // const [zipcode, setZipcode] = useState("");
  // const [address, setAddress] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");
  // const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  // const [createBoard] = useMutation(CREATE_BOARD);
  // const [updateBoard] = useMutation(UPDATE_BOARD);
  // const [uploadFile] = useMutation(UPLOAD_FILE);

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    setActive(Object.values(newInputs).every((data) => data));
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  return (
    <>
      <RegistrationUI
        // isOpen={isOpen}
        // isEdit={props.isEdit}
        // active={active}
        // zipcode={zipcode}
        // address={address}
        inputsErrors={inputsErrors}
        onChangeInputs={onChangeInputs}
        // onClickSubmit={onClickSubmit}
        // onClickUpdate={onClickUpdate}
        // onClickAddressSearch={onClickAddressSearch}
        // onCompleteAddressSearch={onCompleteAddressSearch}
        onChangeAddressDetail={onChangeAddressDetail}
        // onChangeFiles={onChangeFiles}
      />
    </>
  );
}
