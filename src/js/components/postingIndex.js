import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';

@connect(state => {
  return {
    postings: state.postings
  }
})

export default class PostingIndex extends React.Component {
  componentWillMount () {
    this.props.dispatch(apiActionCreators.fetchJobPostings());
  }

  displayPostingItem (item) {
     return (
       <PostingIndexItem
         id={posting.id}
         title={item.title}
         company={item.company}
         date_posted={item.date_posted} />
     )
  }

  render () {
    console.log('render postingsIndex component')
    var { postings } = this.props;

    return (
      <div id='postings-index-container'>
        { postings.map(this.displayPostingItem) }
      </div>
    )
  }
}
