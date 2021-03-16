import React from "react";
import { Provider } from "react-redux";
import HomePage from "./pages/home/home";

import store from "./redux/index";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};
export default AppWrapper;
