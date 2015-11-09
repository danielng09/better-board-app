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

  handleLoadMore() {
    let { page } = this.props;
    this.props.dispatch(apiActionCreators.fetchJobPostings(page + 1))
  }

  displayPostingItem (item) {
    const length = 50;
    let title = item.title;
    let trimmedTitle = title.length > length ?
                        title.substring(0, length - 3) + "..." :
                        title;
     return (
       <PostingIndexItem
         dispatch={this.props.dispatch}
         key={item.id}
         id={item.id}
         title={trimmedTitle}
         company={item.company}
         activity={item.time_ago}
         location={item.location}
         source={item.source} />
     )
  }

  render () {
    var { postings } = this.props;
    return (
      <div className="col-md-7">
        <div id="job-postings-index">
          { postings.map(::this.displayPostingItem) }
        </div>
        <button className="btn btn-success center-block"
                style={{marginBottom:'15px'}}
                onClick={::this.handleLoadMore}>Load More!</button>
      </div>
    )
  }
}
