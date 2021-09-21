import { useRouter } from "next/router";
import { ComponentType, useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

// eslint-disable-next-line react/display-name
const withAuth = (Component: ComponentType) => (props: any) => {
  const router = useRouter();

  const { accessToken } = useContext(GlobalContext);

  // setAccessToken("aaa");
  // console.log(accessToken);
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요한 페이지 입니다.");
      router.push("/product/login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
