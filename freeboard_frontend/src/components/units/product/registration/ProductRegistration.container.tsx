// import { useMutation } from "@apollo/client";
// import router from "next/router";
// // import router, { useRouter } from "next/router";
// import { ChangeEvent, useContext, useState } from "react";
// import { Modal } from "antd";
// import { useRef } from "react";

// import withAuth from "../../../commons/hocs/withAuth";
// import { GlobalContext } from "../../../../../pages/_app";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { schema } from "./ProductRegistration.validations";
// import RegistrationUI from "./ProductRegistration.presenter";
// import { IRegistrationProps } from "./ProductRegistration.types";
// import {
//   CREATE_USED_ITEM,
//   UPDATE_USED_ITEM,
//   UPLOAD_FILE,
// } from "./ProductRegistration.queries";

// // import "react-quill/dist/quill.snow.css";

// export const INPUTS_INIT = {
//   name: "",
//   remarks: "",
//   contents: "",
//   price: 0,
//   tags: "",
// };

// export const INPUTS_INIT_ERROR = {
//   name: "",
//   remarks: "",
//   contents: "",
//   price: "",
//   tags: "",
// };

// // const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// export default function Registration(props: IRegistrationProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [active, setActive] = useState(false);
//   const [inputs, setInputs] = useState(INPUTS_INIT);
//   const [zipcode, setZipcode] = useState("");
//   const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT_ERROR);
//   const [address, setAddress] = useState("");
//   const [addressDetail, setAddressDetail] = useState("");
//   const { setValue } = useForm();
//   const [createUseditem] = useMutation(CREATE_USED_ITEM);
//   // const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
//   const [uploadFile] = useMutation(UPLOAD_FILE);
//   const [latLag, setLatLag] = useState({ lat: 0, lag: 0 });

//   const { register, handleSubmit, formState } = useForm({
//     mode: "onChange", // 체인지 할때 마다 스테이지를 체크해줘
//     resolver: yupResolver(schema),
//   });

//   const [createUsedItem] = useMutation(CREATE_USED_ITEM);

//   function onChangeInputs(
//     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     if (event.target.name === "price") {
//       const newInputs = {
//         ...inputs,
//         [event.target.name]: Number(event.target.value),
//       };
//       setInputs(newInputs);
//     } else {
//       const newInputs = { ...inputs, [event.target.name]: event.target.value };
//       setInputs(newInputs);
//     }

//     console.log(inputs);
//     // setActive(Object.values(newInputs).every((data) => data));
//     // setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
//   }

//   const onChangeContents = (value) => {
//     const newInputs = { ...inputs, contents: value };
//     setInputs(newInputs);
//     console.log(inputs);
//   };

//   // const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
//   // const onChangeContents = (value) => {
//   //   setValue("contents", value);
//   // };

//   function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
//     setAddressDetail(event.target.value);
//   }

//   // function onChangeFiles(file: File, index: number) {
//   //   const newFiles = [...files];
//   //   newFiles[index] = file;
//   //   setFiles(newFiles);
//   // }

//   async function onClickSubmit() {
//     console.log(inputs);
//     setInputsErrors({
//       name: inputs.name ? "" : "상품명을 입력해주세요.",
//       remarks: inputs.remarks ? "" : "한줄내용을 입력해주세요.",
//       contents:
//         inputs.contents !== "<p><br></p>" && inputs.contents !== ""
//           ? ""
//           : "상품내용을 입력해주세요.",
//       price: inputs.price ? "" : "가격을 입력해주세요.",
//       tags: inputs.tags ? "" : "태그를 입력해주세요.",
//     });

//     try {
//       // 이미지 업로드
//       // const uploadFiles = files
//       //   .filter((data) => data)
//       //   .map((data) => uploadFile({ variables: { file: data } }));
//       // const results = await Promise.all(uploadFiles);
//       // const images = results.map((data) => data.data.uploadFile.url);

//       const result = await createUseditem({
//         variables: {
//           createUseditemInput: {
//             ...inputs,
//             // name: data.name,
//             // remarks: data.remarks,
//             // contents: data.contents,
//             // price: data.price,
//             // UseditemAddress: {
//             //   zipcode: zipcode,
//             //   address: address,
//             //   addressDetail: addressDetail,
//             //   lat: latLag.lat,
//             //   lng: latLag.lag,
//             // },
//             // images: images,
//           },
//         },
//       });
//       alert("등록성공");
//       console.log(result);
//       Modal.confirm({
//         content: "상품이 등록되었습니다.",
//         onOk: () =>
//           router.push(`/product/main/${result.data.createUseditem._id}`),
//       });
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   // const onChangeContents = (value) => {
//   //   const isBlank = "<p><br></p>";
//   //   setValue("contents", value === isBlank ? "" : value);
//   //   trigger("contents");
//   //   console.log(formState.errors.remarks);
//   // };

//   // function onChangeFiles(file: File, index: number) {
//   //   const newFiles = [...files];
//   //   newFiles[index] = file;
//   //   setFiles(newFiles);
//   // }

//   function onClickAddressSearch() {
//     setIsOpen(true);
//   }

//   function onCompleteAddressSearch(data: any) {
//     setAddress(data.address);
//     setZipcode(data.zonecode);
//     setIsOpen(false);
//   }

//   return (
//     <>
//       <RegistrationUI
//         // isOpen={isOpen}
//         isEdit={props.isEdit}
//         active={active}
//         // address={address}
//         // zipcode={zipcode}
//         inputsErrors={inputsErrors}
//         onChangeInputs={onChangeInputs}
//         onClickSubmit={onClickSubmit}
//         onChangeContents={onChangeContents}
//         // onChange={onChangeContents}
//         // onClickUpdate={onClickUpdate}
//         // onClickAddressSearch={onClickAddressSearch}
//         // onCompleteAddressSearch={onCompleteAddressSearch}
//         // onChangeAddressDetail={onChangeAddressDetail}
//         // onChangeFiles={onChangeFiles}
//         // register={register}
//         // handleSubmit={handleSubmit}
//         // onSubmit={onSubmit}
//         // onChangeContents={onChangeContents}
//         // isActive={formState.isValid}
//         // errors={formState.errors}
//         // latLag={latLag}
//         // setLatLag={setLatLag}
//       />
//     </>
//   );
// }

import { useMutation } from "@apollo/client";
import router from "next/router";
// import router, { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { Modal } from "antd";
import { useRef } from "react";

import withAuth from "../../../commons/hocs/withAuth";
import { GlobalContext } from "../../../../../pages/_app";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductRegistration.validations";
import RegistrationUI from "./ProductRegistration.presenter";
import { IRegistrationProps } from "./ProductRegistration.types";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./ProductRegistration.queries";

// import "react-quill/dist/quill.snow.css";
export default function ProductWrite(props: IProps) {
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [latLag, setLatLag] = useState({ lat: 0, lag: 0 });
  const { register, handleSubmit, setValue, formState, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUsedItem] = useMutation(CREATE_USED_ITEM);

  async function onSubmit(data) {
    try {
      const uploadFiles = files
        .filter((data) => data)
        .map((data) => uploadFile({ variables: { file: data } }));
      const results = await Promise.all(uploadFiles);
      const images = results.map((data) => data.data.uploadFile.url);
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressdetail,
              lat: latLag.lat,
              lng: latLag.lag,
            },
            images: images,
          },
        },
      });
      alert("등록성공");
      console.log(result.data);
      router.push(`/product/detail/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  const onChangeContents = (value) => {
    const isBlank = "<p><br></p>";
    setValue("contents", value === isBlank ? "" : value);
    trigger("contents");
    console.log(formState.errors.remarks);
  };

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }
  return (
    <RegistrationUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onChangeContents={onChangeContents}
      isActive={formState.isValid}
      errors={formState.errors}
      onChangeFiles={onChangeFiles}
      latLag={latLag}
      setLatLag={setLatLag}
    />
  );
}

// withAuth(ProductWrite);
