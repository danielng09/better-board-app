import React from 'react';
import configureStore from './store/configureStore';
import App from './components/app';

import { Provider } from 'react-redux';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('content')
);
