import styled from "@emotion/styled";

export const Contianer = styled.div`
  border-left: 1px solid #eaeaea;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 1200px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
`;
export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 30px;
  color: #000;
`;
export const Title = styled.div`
  padding: 30px;
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 30px;
`;
export const ProfileImgWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 150px;
`;
export const InputWrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
`;
export const InputTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
export const MyInput = styled.input`
  width: 80%;
  font-size: 16px;
  outline: none;
  background-color: none;
  border: none;
  border-bottom: 1px solid #ffd400;
`;
export const ButtonWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
`;
export const MyButton = styled.button`
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffd400;
  border-radius: 10px;
  padding: 10px;
  :hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
