import {
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
  useState,
} from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IContext {
  accessToken?: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  userInfo?: any;
  setUserInfo?: any;
}
// @ts-ignore
export const GlobalContext = createContext<IContext>({});
// @ts-ignore
const withGlobalContext = (Component) => (props) => {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (sessionStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
    const SessionUserInfo = sessionStorage.getItem("userInfo");
    if (SessionUserInfo) setUserInfo(JSON.parse(SessionUserInfo));
  }, []);

  return (
    <GlobalContext.Provider value={value}>
      <Component {...props} />
    </GlobalContext.Provider>
  );
};

export default withGlobalContext;
