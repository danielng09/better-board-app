import React from 'react';
import { connect } from 'react-redux';
require("../../css/app.scss");

import Nav from './Nav';
import Login from './login';
import Sidebar from './sidebar';
import PostingIndex from './postingIndex';
import PostingDetail from './postingDetail';
import Footer from './footer';

@connect(state => {
  return (
    { user: state.auth.user,
      loading: state.auth.loading }
  )
})

export default class App extends React.Component {
  render () {
    let { user, loading } = this.props;
    if (user) {
      return (
        <div id="main-app">
          <Login />
          <Nav />
          <PostingIndex />
          <Sidebar />
          <Footer />
        </div>
      )
    } else if (loading) {
      return (
        <div id="main-app">
          <Login />
          <div className='spinner'>
            <p>Logging in...</p>
            <span className="fa fa-4x fa-spin fa-spinner" />
          </div>
        </div>
      )
    } else {
      return (
        <div id="main-app">
          <Login />
        </div>
      )
    }
  }
}
