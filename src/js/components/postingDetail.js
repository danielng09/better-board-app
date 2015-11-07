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
    return (
      <div id="job-posting-detail" className="col-md-4">
        <p>{postDetail.title}</p>
        <p>{postDetail.company}</p>
        <p>{postDetail.source}</p>
        <p>{postDetail.location}</p>
        <p>{postDetail.date_posted}</p>
        {postDetail.description}
        <a href={postDetail.url} />
      </div>
    )
  }
}
