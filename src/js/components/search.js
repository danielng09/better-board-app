import React from 'react';
import { connect } from 'react-redux';

import * as apiActionCreators from '../actionCreators/apiActionCreators';
import * as searchActionCreators from '../actionCreators/searchActionCreators';
import searchConstants from '../constants/searchConstants';
import * as utils from '../utils/util';
require("../../css/search.scss");

@connect(state => {
  return ({
    sourceNames: state.search.sourceNames,
    datePosted: state.search.datePosted
  })
})

export default class Search extends React.Component {
  handleSearch(event) {
    event.preventDefault();
    let { dispatch, sourceNames, datePosted } = this.props;
    let sources = utils.sourceNameHashtoArray(sourceNames);
// date posted
    { sources: sources }
    let searchInput = this.refs.searchQueryInput.value;

    dispatch(searchActionCreators.updateSearchInput(searchInput))
    dispatch(
      apiActionCreators.fetchNewJobPostings(1, searchInput, sources)
    ).then((action) => {
      let id = action.res.postings[0].id
      dispatch(apiActionCreators.fetchJobDetail(id))
    });
  }

  handleChangeSource(event) {
    let sourceName = event.target.innerText;
    let { dispatch, sourceNames } = this.props;
    let shouldUseSource = !sourceNames[sourceName];
    dispatch(searchActionCreators.updateSourceNames(sourceName, shouldUseSource))
    this.forceUpdate();
  }

  handleChangeDatePosted(event) {
    let datePosted = event.target.innerText;
    let { dispatch } = this.props;
    dispatch(searchActionCreators.updateDatePosted(datePosted))
    this.forceUpdate();
  }

  displaySourceButtons(sourceName) {
    let { sourceNames } = this.props;
    let activeStyle = sourceNames[sourceName] ? 'btn btn-danger' : "btn btn-default";
    return (<button type="button"
                    className={activeStyle}
                    key={sourceName}
                    onClick={::this.handleChangeSource}>
                    {sourceName}</button>
    )
  }

  displayDatePostedButtons(datePostedTxt) {
    let { datePosted } = this.props;
    let activeStyle = datePosted === datePostedTxt ? 'btn btn-danger' : 'btn btn-default';
    return (
      <button type="button"
              className={activeStyle}
              key={datePostedTxt}
              onClick={::this.handleChangeDatePosted}>
              {datePostedTxt}</button>
           )
  }

  render() {
    let { sourceNames } = this.props;
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
          {Object.keys(sourceNames).map(::this.displaySourceButtons)}
        </div>
        <br />
        <div className="btn-group-vertical" role="group">
          {searchConstants.datePosted.map(::this.displayDatePostedButtons)}
        </div>

      </div>
    )
  }
}
