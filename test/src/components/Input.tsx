import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs((props) => ({
  placeholder: '아이디를 입력해주세요',
  placeholderTextColor: props.borderColor,
}))`
  width: 300px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  /* border-radius: 10px; */
  /* elevation: ; */
  border: 2px;
  border-color: ${(props) => props.borderColor};
  font-size: 18px;
`;

const Input = (props) => {
  return <StyledInput borderColor={props.borderColor} />;
};

export default Input;
