import React from 'react';
import PostingIndex from './postingIndex';

export default class App extends React.Component {
  render () {
    console.log('render App component');

    return (
      <div id="main-app">
        <PostingIndex />
      </div>
    )
  }
}
