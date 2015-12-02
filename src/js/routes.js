import React from 'react';
import { Router, IndexRouter, Redirect } from 'react-router';
import App from './app';
import LoginForm from './components/LoginForm'

export default (
  <Route path="/" name="app" component={App}>
  </Route>
)
