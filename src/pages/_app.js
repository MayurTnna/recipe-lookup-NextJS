import "jquery";
import "popper.js";
import "../styles/bootstrap.min.css";

import Navbar from "../common/Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar showSearchBar={true}/>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
