import React from 'react';
import Nav from './Nav';
import PostingIndex from './postingIndex';
import PostingDetail from './postingDetail';
import Footer from './footer';

export default class App extends React.Component {
  render () {
    return (
      <div id="main-app">
        <Nav />
        <PostingIndex />
        <PostingDetail />
        <Footer />
      </div>
    )
  }
}
