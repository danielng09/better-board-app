import React from 'react';
import PostingIndex from './postingIndex';
import PostingDetail from './postingDetail';

export default class App extends React.Component {
  render () {
    return (
      <div id="main-app">
        <PostingIndex />
        <PostingDetail />
      </div>
    )
  }
}
