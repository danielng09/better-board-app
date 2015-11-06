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
     return (
       <PostingIndexItem
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
        <table style={{'width': '100%'}}>
          <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Date Posted</td>
          </tr>
          { postings.map(this.displayPostingItem) }
        </table>
      </div>
    )
  }
}
