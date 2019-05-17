import React from "react";
import { Provider } from "react-redux";

import store from "../store";
import HeaderLayout from "./layouts/HeaderLayout";
import MainLayout from "./layouts/MainLayout";
import ModalWindowContainer from "./containers/ModalWindowContainer";

import "./App.css";

const App: React.FunctionComponent<any> = () => (
  <Provider store={store}>
    <HeaderLayout />
    <MainLayout />
    <ModalWindowContainer />
  </Provider>
);

export default App;
