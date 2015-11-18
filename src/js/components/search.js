import React from 'react';
import { connect } from 'react-redux';

import * as apiActionCreators from '../actionCreators/apiActionCreators';
import * as searchActionCreators from '../actionCreators/searchActionCreators';
require("../../css/search.scss");

@connect(state => {
  return { }
})

export default class Search extends React.Component {
  handleSearch(event) {
    event.preventDefault();
    let { dispatch } = this.props;
    let searchInput = this.refs.searchQueryInput.value;

    dispatch(searchActionCreators.updateSearchInput(searchInput))
    dispatch(apiActionCreators.fetchNewJobPostings(1, searchInput))
  }

  render() {
    return (
      <div id='search'>
        <form id='search-form'>
          <input type='text'
                 ref="searchQueryInput"
                 className='form-control'
                 placeholder='Enter a keyword' />
          <button className="btn btn-danger" onClick={::this.handleSearch}>
            <i className="fa fa-search" /></button>
        </form>
        <br />
        <div className="btn-group-vertical" role="group">
          <button type="button" className="btn btn-danger">Indeed</button>
          <button type="button" className="btn btn-danger">Craigslist</button>
          <button type="button" className="btn btn-danger">Stackoverflow</button>
          <button type="button" className="btn btn-danger">Github</button>
        </div>
        <br />
        <div className="btn-group-vertical" role="group">
          <button type="button" className="btn btn-default">1 day</button>
          <button type="button" className="btn btn-default">3 days</button>
          <button type="button" className="btn btn-default">7 days</button>
          <button type="button" className="btn btn-default">14 days</button>
          <button type="button" className="btn btn-danger">All</button>
        </div>

      </div>
    )
  }
}
