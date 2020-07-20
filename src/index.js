
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';

render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);