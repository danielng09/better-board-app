import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';
import PostingIndexItem from './postingIndexItem';

@connect(state => {
  return {
    postings: state.api.postings,
    page: state.api.page,
    total_pages: state.api.total_pages
  }
})

export default class PostingIndex extends React.Component {
  componentWillMount () {
    let { page } = this.props;
    this.props.dispatch(apiActionCreators.fetchJobPostings(page));
  }

  handlePrevPage() {
    let { page } = this.props;
    if (page === 1) { return; }
    this.props.dispatch(apiActionCreators.fetchJobPostings(page - 1))
  }

  handleNextPage() {
    let { page, total_pages } = this.props;
    if (page === total_pages ) { return; }
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
    var { postings, page, total_pages } = this.props;
    return (
      <div className="col-md-7" id="index-container">
        <div className="chevron col-md-1" onClick={::this.handlePrevPage}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div id="job-postings-index" className="col-md-10">
          <p id="page-info">Showing page {page} of {total_pages}</p>
          { postings.map(::this.displayPostingItem) }
        </div>
        <div className="chevron col-md-1" onClick={::this.handleNextPage}>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    )
  }
}
