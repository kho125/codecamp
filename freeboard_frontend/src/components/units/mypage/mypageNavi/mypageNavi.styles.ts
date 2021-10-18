import styled from "@emotion/styled";
export const Container = styled.div`
  padding-top: 50px;
  margin-right: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Title = styled.div`
  padding-bottom: 30px;
  font-size: 36px;
  font-weight: bold;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;
export const UserName = styled.div`
  color: #ffd400;
  padding-top: 30px;
  font-size: 26px;
  font-weight: bold;
`;
export const UserAmount = styled.div`
  padding-top: 20px;
  font-size: 22px;
`;
export const NaviWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
`;
export const NaviItem01 = styled.div`
  font-size: 22px;
  color: ${(props: any) => (props.isActive01 ? "#ffd400" : "rgba(0,0,0,0.4)")};
  padding: 20px;
  :hover {
    /* color: #ffd400; */
    color: #06f;
    font-weight: bold;
    cursor: pointer;
  }
`;
export const NaviItem02 = styled.div`
  font-size: 22px;
  color: ${(props: any) => (props.isActive02 ? "#ffd400" : "rgba(0,0,0,0.4)")};
  padding: 20px;
  :hover {
    color: #ffd400;
    font-weight: bold;
    cursor: pointer;
  }
`;
export const NaviItem03 = styled.div`
  font-size: 22px;
  color: ${(props: any) => (props.isActive03 ? "#ffd400" : "rgba(0,0,0,0.4)")};
  padding: 20px;
  :hover {
    color: #ffd400;
    font-weight: bold;
    cursor: pointer;
  }
`;
