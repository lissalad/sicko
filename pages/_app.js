import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="md:mt-10 md:px-8 m-2">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
