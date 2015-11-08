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
    // let desc = postDetail.description ? postDetail.description.replace(/<br \/>/g, "") : postDetail.description;

    return (
      <div className="col-md-5">
        <div id='job-posting-detail'>
          <p className="detail-title">{postDetail.title}</p>
          <p className="detail-company">
            <i className="fa fa-building-o" />&nbsp;&nbsp;
            {postDetail.company}
          </p>
          <p className="detail-source">{postDetail.source}</p>
          <p className="detail-location">
            <i style={{color: '#DBDBDB'}} className="fa fa-map-marker" />&nbsp;&nbsp;
            {postDetail.location}
          </p>
          <p className="detail-date">
            <i className="fa fa-calendar"></i>&nbsp;
            {postDetail.date_posted}
          </p>
          <p className="detail-description"
            dangerouslySetInnerHTML={{__html: postDetail.description }} />
          <a className="btn btn-info detail-url"
             target="_blank"
             href={postDetail.url}><i className="fa fa-link"></i>&nbsp;&nbsp;Original
          </ a>
        </div>
      </div>
    )
  }
}
