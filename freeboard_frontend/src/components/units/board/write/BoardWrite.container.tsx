import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useRef } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { IBoardWriteProps } from "./BoardWrite.types";
import { Modal } from "antd";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
};

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);
  const fileRef2 = useRef<HTMLInputElement>(null);
  const fileRef3 = useRef<HTMLInputElement>(null);

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

  async function onClickSubmit() {
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
      youtubeUrl: "",
    });

    const isEvery = Object.values(inputs)
      .filter((data) => data !== "yourubeUrl")
      .every((data) => data);
    if (isEvery) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: { zipcode, address, addressDetail },
            },
          },
        });
        Modal.confirm({
          content: "게시물이 성공적으로 등록되었습니다.",
          onOk: () => router.push(`/boards/${result.data.createBoard._id}`),
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  async function onClickUpdate() {
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
      youtubeUrl: "",
    });
    if (Object.values(inputs).every((data) => data)) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password: inputs.password,
            updateBoardInput: {
              title: inputs.title,
              contents: inputs.contents,
              youtubeUrl: inputs.youtubeUrl,
            },
          },
        });
        Modal.confirm({
          content: "게시물이 성공적으로 수정되었습니다.",
          onOk: () => router.push(`/boards/${result.data.updateBoard._id}`),
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      // 파일 사이즈가 없으면
      alert("파일이 없습니다");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 너무 큽니다(제한: 5MB)");
      return; // 함수 종료
    }
    if (file.type.includes("png") && !file.type.includes("jpeg")) {
      // png가 없다면 또는 jpeg도 없다면
      alert("png 또는 jpeg 파일만 전송 가능합니다.");
      return;
    }

    try {
      const result = await uploadFile({
        variables: {
          aaa: file,
        },
      });
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  }

  function openFile() {
    fileRef?.current?.click();
  }

  function openFile2() {
    fileRef2?.current?.click();
  }

  function openFile3() {
    fileRef2?.current?.click();
  }

  return (
    <>
      <BoardWriteUI
        isOpen={isOpen}
        isEdit={props.isEdit}
        active={active}
        zipcode={zipcode}
        address={address}
        inputsErrors={inputsErrors}
        onChangeInputs={onChangeInputs}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        onChangeAddressDetail={onChangeAddressDetail}
        fileRef={fileRef}
        fileRef2={fileRef2}
        fileRef3={fileRef3}
        openFile={openFile}
        openFile2={openFile2}
        openFile3={openFile3}
        onChangeFile={onChangeFile}
      />
      {/* // <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
    </>
  );
}
