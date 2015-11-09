import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';
import PostingIndexItem from './postingIndexItem';

@connect(state => {
  return {
    postings: state.api.postings,
    page: state.api.page
  }
})

export default class PostingIndex extends React.Component {
  componentWillMount () {
    let { page } = this.props;
    this.props.dispatch(apiActionCreators.fetchJobPostings(page));
  }

  handlePrevPage() {
    let { page } = this.props;
    this.props.dispatch(apiActionCreators.fetchJobPostings(page - 1))
  }

  handleNextPage() {
    let { page } = this.props;
    this.props.dispatch(apiActionCreators.fetchJobPostings(page + 1))
  }

  trimString(string, maxLength) {
    return string.length > maxLength ? string.substring(0, maxLength - 3) + "..." : string;
  }

  displayPostingItem (item) {
     return (
       <PostingIndexItem
         dispatch={this.props.dispatch}
         key={item.id}
         id={item.id}
         title={this.trimString(item.title, 50)}
         company={item.company}
         activity={item.time_ago}
         location={item.location}
         source={item.source} />
     )
  }

  render () {
    var { postings } = this.props;
    return (
      <div className="col-md-7" id="index-container">
        <div id="left-chevron" onClick={::this.handlePrevPage}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div id="job-postings-index">
          { postings.map(::this.displayPostingItem) }
        </div>
        <div id="right-chevron" onClick={::this.handleNextPage}>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    )
  }
}
