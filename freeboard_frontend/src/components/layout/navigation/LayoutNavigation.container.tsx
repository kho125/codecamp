import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function LayoutNavigation() {
  const router = useRouter();
  // const [imgUrl, setImgUrl] = useState("");

  function goBoard() {
    router.push(`/boards`);
  }

  function goMarket() {
    router.push(`/market`);
  }

  function goMypage() {
    router.push(`/mypage`);
  }

  // useEffect(() => {
  //   const getImg = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setImgUrl(result.data.message);
  //   };
  //   getImg();
  // }, []);

  return (
    <LayoutNavigationUI
      // imgUrl={imgUrl}
      goBoard={goBoard}
      goMarket={goMarket}
      goMypag={goMypage}
    />
  );
}
