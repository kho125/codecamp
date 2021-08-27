import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // console.log(precess.env.NEXT_PUBLIC)
  return <Component {...pageProps} />;
}

export default MyApp;
