import { HashRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import Footer from "./footer/footer";

const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
          <App/>
          <Footer/>
      </HashRouter>
  </Provider>
);

export default Root;