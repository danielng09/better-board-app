import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';

@connect(state => {
  return (
    { postDetail: state.api.postDetail }
  )
})

export default class Search extends React.Component {
}
