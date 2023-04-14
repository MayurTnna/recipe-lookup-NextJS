import "jquery";
import "popper.js";
import "../styles/bootstrap.min.css";

import Navbar from "../common/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
