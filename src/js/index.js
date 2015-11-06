import React from 'react';
import configureStore from './store/configureStore';
import App from './components/app';

import { Provider } from 'react-redux';
import { Router } from 'react-router';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('content')
);
