import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';

@connect(state => {
  return {}
})

export default class Search extends React.Component {
  render() {
    return (
      <div id='search'>
      </div>
    )
  }
}
