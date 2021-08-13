import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./ProductRegistration.types";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  height: 1847px;
  border: 1px solid #000;
  margin: 80px 360px 301px;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Registration = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
  margin-bottom: 80px;
`;

export const Product = styled.div`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Product__Input = styled.input`
  margin-bottom: 40px;
  padding: 14px 0 14px 16px;
  border: 1px solid #bdbdbd;
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 3px #999;
    transition: 0.5s;
  }
`;

export const Contents = styled.div`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Contents__Input = styled.input`
  margin-bottom: 40px;
  padding: 14px 0 14px 16px;
  border: 1px solid #bdbdbd;
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 3px #999;
    transition: 0.5s;
  }
`;

export const Explanation = styled.div`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

// ReactQuill을 사용했으니 이름을 정하고 스타일에 (가로안에 넣기)
export const ReactQuill__Input = styled(ReactQuill)`
  height: 100%;
  margin-bottom: 85px;
`;

export const Price = styled.div`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Price__Input = styled.input`
  margin-bottom: 40px;
  padding: 14px 0 14px 16px;
  border: 1px solid #bdbdbd;
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 3px #999;
    transition: 0.5s;
  }
`;

export const Tag = styled.div`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Tag__Input = styled.input`
  margin-bottom: 40px;
  padding: 14px 0 14px 16px;
  border: 1px solid #bdbdbd;
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 3px #999;
    transition: 0.5s;
  }
`;

export const Location = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Location__Left = styled.div`
  /* margin-right: 24px; */
`;

export const Location__Title = styled.div`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  flex-direction: column;
`;

export const Map = styled.div`
  width: 384px;
  height: 252px;
  background-color: #f615;
`;

export const Location__Right = styled.div``;

export const GPS = styled.div`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const GPSs = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const LAT__Input = styled.input`
  width: 108px;
  height: 52px;
  padding: 14px 20px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 3px #999;
    transition: 0.5s;
  }
`;

export const GPS__Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 14px;
`;

export const LNG__Input = styled.input`
  width: 108px;
  height: 52px;
  padding: 14px 20px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 3px #999;
    transition: 0.5s;
  }
`;

export const Address = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Address__Input = styled.input`
  width: 588px;
  height: 52px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  border: 1px solid #bdbdbd;
  transition: 0.5s;
  :focus {
    outline: 0;
    box-shadow: 1px 1px 3px #999;
    transition: 0.5s;
  }
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.active ? "#ffd600" : ""};
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;
