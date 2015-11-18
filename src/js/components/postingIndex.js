import React from 'react';
import { connect } from 'react-redux';
import Infinite from 'react-infinite';

import * as apiActionCreators from '../actionCreators/apiActionCreators';
import PostingIndexItem from './postingIndexItem';
require("../../css/postingIndex.scss");

@connect(state => {
  return {
    postings: state.api.postings,
    page: state.api.page,
    postings_total: state.api.postings_total,
    postings_shown: state.api.postings_shown,
    searchInput: state.search.searchInput
  }
})

export default class PostingIndex extends React.Component {
  componentWillMount () {
    let { page, postings, searchInput } = this.props;
    this.props.dispatch(apiActionCreators.fetchJobPostings(page, searchInput));
  }

  handleLoadNextPage() {
    let { page, total_pages, searchInput } = this.props;
    if (page === total_pages ) { return; }
    this.props.dispatch(apiActionCreators.fetchJobPostings(page + 1, searchInput))
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
    var { postings, page, postings_total, postings_shown } = this.props;

    return (
      <div id="job-postings-index">
        <p id="page-info">Showing <strong>{postings_shown}</strong> out of <strong>{postings_total}</strong> results</p>
        <Infinite elementHeight={86}
                  containerHeight={656}
                  infiniteLoadBeginEdgeOffset={150}
                  onInfiniteLoad={::this.handleLoadNextPage}>
          { postings.map(::this.displayPostingItem) }
        </Infinite>;
      </div>
    )
  }
}
