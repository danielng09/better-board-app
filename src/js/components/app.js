import React from 'react';
import Nav from './Nav';
import PostingIndex from './postingIndex';
import PostingDetail from './postingDetail';

export default class App extends React.Component {
  render () {
    return (
      <div id="main-app">
        <Nav />
        <div id='content' className='col-md-offset-1 col-md-10'>
          <PostingIndex />
          <PostingDetail />
        </div>
      </div>
    )
  }
}
