import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from '../store';

import HeaderLayout from './layouts/HeaderLayout';
import MainLayout from './layouts/MainLayout';
import ModalWindowContainer from './containers/ModalWindowContainer';

const App: React.StatelessComponent<any> = () => (
  <Provider store={store}>
    <HeaderLayout />
    <MainLayout />
    <ModalWindowContainer />
  </Provider>
);

export default App;
