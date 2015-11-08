import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';
import imageUrlConstants from '../constants/imageUrlConstants';

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
    let sourceName = postDetail.source ? postDetail.source.toUpperCase() : postDetail.source;

    return (
      <div className="col-md-5">
        <div id='job-posting-detail'>
          <p className="detail-title">{postDetail.title}</p>
          <p className="detail-company">
            <i className="fa fa-building-o" />&nbsp;&nbsp;
            {postDetail.company}
          </p>
          <p className="detail-location">
            <i style={{color: '#DBDBDB'}} className="fa fa-map-marker" />&nbsp;&nbsp;
            {postDetail.location}
          </p>
          <p>
            <span className="detail-date">
              <i className="fa fa-calendar"></i>&nbsp;&nbsp;
              {postDetail.date_posted}
            </span>
            <span className="activity">
              <i style={{color:'#DBDBDB'}} className="fa fa-clock-o" />&nbsp;&nbsp;
              {'Posted '  + postDetail.time_ago + ' ago'}
            </span>
          </p>
          <p>
            <a className="btn btn-warning detail-url"
               target="_blank"
               href={postDetail.url}><i className="fa fa-link"></i>&nbsp;&nbsp;Original
            </ a>
            <span className="btn btn-default remove-button-features source-logo">
              <img className="source-image" src={imageUrlConstants[sourceName]} />
            </span>
          </p>
          <p className="detail-description"
            dangerouslySetInnerHTML={{__html: postDetail.description }} />
        </div>
      </div>
    )
  }
}
