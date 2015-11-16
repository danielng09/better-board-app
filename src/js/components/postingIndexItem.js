import React from 'react';
import * as apiActionCreators from '../actionCreators/apiActionCreators';
import imageUrlConstants from '../constants/imageUrlConstants';
require("../../css/postingIndexItem.scss");

export default class PostingIndexItem extends React.Component {
  handlePostingClick (id) {
    this.props.dispatch(apiActionCreators.fetchJobDetail(id));
  }

  render () {
    return (
      <div className="job-postings-item" onClick={this.handlePostingClick.bind(this, this.props.id)}>
        <span className="activity">
          <i style={{color:'#DBDBDB'}} className="fa fa-clock-o" />&nbsp;&nbsp;
          {'Posted '  + this.props.activity + ' ago'}
        </span>
        <p className='title'>{this.props.title}</p>
        <span className='company'>
          <i className="fa fa-building-o" />&nbsp;&nbsp;
          {this.props.company}
        </span>
        <span className="location">
          <i style={{color: '#DBDBDB'}} className="fa fa-map-marker" />&nbsp;&nbsp;
          {this.props.location}
        </span>
        <span className="btn btn-default remove-button-features source-logo">
          <img className="source-image" src={imageUrlConstants[this.props.source.toUpperCase()]} />
        </span>
      </div>
    )
  }
}
