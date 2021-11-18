import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickLogo() {
    router.push("/");
  }

  function onClickMoveToLogin() {
    router.push("/login");
  }

  function onClickMoveToSignup() {
    router.push("/signup");
  }

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
