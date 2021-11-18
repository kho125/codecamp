import styled from "@emotion/styled";
import { Rate } from "antd";

export const Bar = styled.div`
  border: 1px solid #bdbdbd;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;

export const PencilIcon = styled.img`
  margin-right: 14px;
`;

export const Star = styled(Rate)``;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #666;
    transition: 0.3s;
  }
`;
