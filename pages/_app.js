import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
