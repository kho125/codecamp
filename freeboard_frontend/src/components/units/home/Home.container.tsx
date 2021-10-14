import { useRouter } from "next/router";
import HomeUI from "./Home.presenter";

export default function Home() {
  const router = useRouter();
  const data = [
    { name: "자유게시판", color: "red", push: "/boards" },
    { name: "중고마켓", color: "orange", push: "/product/main" },
    { name: "마이페이지", color: "green", push: "/mypage" },
  ];
  const gotowhere = (push) => () => {
    console.log(push);
    router.push(push);
  };
  return <HomeUI data={data} gotowhere={gotowhere} />;
}
