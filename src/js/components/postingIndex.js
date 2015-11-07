import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';
import PostingIndexItem from './postingIndexItem';

@connect(state => {
  return {
    postings: state.api.postings
  }
})

export default class PostingIndex extends React.Component {
  componentWillMount () {
    this.props.dispatch(apiActionCreators.fetchJobPostings());
  }

  displayPostingItem (item) {
    const length = 50;
    let title = item.title;
    let trimmedTitle = title.length > length ?
                        title.substring(0, length - 3) + "..." :
                        title;
     return (
       <PostingIndexItem
         key={item.id}
         title={trimmedTitle}
         company={item.company}
         activity={item.time_ago}
         location={item.location}
         source={item.source} />
     )
  }

  render () {
    console.log('render postingsIndex component')
    var { postings } = this.props;
    return (
      <div id="job-postings-index" className="col-md-offset-1 col-md-6">
        <h1 id="job-postings-header">Better Board</h1>
        { postings.map(this.displayPostingItem) }
      </div>
    )
  }
}
