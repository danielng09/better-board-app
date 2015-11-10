import React from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import Login from './login';
import PostingIndex from './postingIndex';
import PostingDetail from './postingDetail';
import Footer from './footer';

@connect(state => {
  return (
    { user: state.auth.user }
  )
})

export default class App extends React.Component {
  render () {
    let { user } = this.props;
    let showComponent;
    if (user) {
      return (
        <div id="main-app">
          <Login />
          <Nav />
          <PostingIndex />
          <PostingDetail />
          <Footer />
        </div>
      )
    } else {
      return (
        <div id="main-app">
          <Login />
          <Footer />
        </div>
      )
    }
  }
}
