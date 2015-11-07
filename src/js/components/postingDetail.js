import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';

@connect(state => {
  return (
    { postDetail: state.api.postDetail }
  )
})

export default class PostingDetail extends React.Component {
  componentWillMount () {
    this.props.dispatch(apiActionCreators.fetchJobDetail(1));
  }

  render () {
    let { postDetail } = this.props;
    let des = postDetail.description;
    return (
      <div id='job-posting-detail' className="col-md-4">
        <p className="detail-title">{postDetail.title}</p>
        <p className="detail-company">{postDetail.company}</p>
        <p className="detail-source">{postDetail.source}</p>
        <p className="detail-location">
          <i style={{color: '#DBDBDB'}} className="fa fa-map-marker" />&nbsp;&nbsp;
          {postDetail.location}
        </p>
        <p className="detail-date">
          <i className="fa fa-calendar"></i>&nbsp;
          {postDetail.date_posted}
        </p>
        <p>{postDetail.description}</p>
        <a className="btn btn-success detail-url"
           target="_blank"
           href={postDetail.url}>Original</ a>
      </div>
    )
  }
}