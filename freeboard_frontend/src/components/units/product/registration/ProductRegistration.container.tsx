import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import RegistrationUI from "./ProductRegistration.presenter";
import { IRegistrationProps } from "./ProductRegistration.types";
// import "react-quill/dist/quill.snow.css";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function Registration(props: IRegistrationProps) {
  const [active, setActive] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const { setValue } = useForm();
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const onChangeContents = (value) => {
    setValue("contents", value);
  };
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

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  async function onClickSubmit() {
    // setInputsErrors({
    //   writer: inputs.writer ? "" : "작성자를 입력해주세요.",
    //   password: inputs.password ? "" : "비밀번호를 입력해주세요.",
    //   title: inputs.title ? "" : "제목을 입력해주세요.",
    //   contents: inputs.contents ? "" : "내용을 입력해주세요.",
    // });
    //   const isEvery = Object.values(inputs)
    //     // .filter((data) => data !== "youtubeUrl")
    //     .every((data) => data);
    //   if (!isEvery) return;
    //   try {
    //     console.log(files);
    //     // 이미지 업로드
    //     const uploadFiles = files
    //       .filter((data) => data)
    //       .map((data) => uploadFile({ variables: { aaa: data } }));
    //     const results = await Promise.all(uploadFiles);
    //     const images = results.map((data) => data.data.uploadFile.url);
    //     // 게시물 업로드
    //     const result = await createBoard({
    //       variables: {
    //         createBoardInput: {
    //           ...inputs,
    //           boardAddress: {
    //             zipcode: zipcode,
    //             address: address,
    //             addressDetail: addressDetail,
    //           },
    //           images: images,
    //         },
    //       },
    //     });
    //     Modal.confirm({
    //       content: "게시물이 성공적으로 등록되었습니다.",
    //       onOk: () => router.push(`/boards/${result.data.createBoard._id}`),
    //     });
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // }
  }

  return (
    <>
      <RegistrationUI
        isEdit={props.isEdit}
        active={active}
        inputsErrors={inputsErrors}
        onChangeInputs={onChangeInputs}
        onChange={onChangeContents}
        onChangeAddressDetail={onChangeAddressDetail}
        onChangeFiles={onChangeFiles}
      />
    </>
  );
}
