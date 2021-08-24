import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="정적 게시판" />
        <meta property="og:description" content="이 주소는 정적 주소입니다." />
        <meta
          property="og:image"
          content="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
        />
      </Head>
      <div>여기는 게시판 입니다.</div>
    </>
  );
}
