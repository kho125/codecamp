import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const ReactQuill__Input = styled(ReactQuill)`
  height: 300px;
  margin-bottom: 85px;
`;

export default function WebEditor(props) {
  return (
    <>
      <input name={props.name} />
      <ReactQuill__Input onChange={props.onChangeInputs} />
    </>
  );
}
