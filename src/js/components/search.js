import React from 'react';
import { connect } from 'react-redux';
import * as apiActionCreators from '../actionCreators/apiActionCreators';
require("../../css/search.scss");

@connect(state => {
  return {}
})

export default class Search extends React.Component {
  render() {
    return (
      <div id='search'>
        <form id='search-form'>
          <input type='text'
                 className='form-control'
                 placeholder='Enter a keyword' />
          <button type="submit" className="btn btn-danger">
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
