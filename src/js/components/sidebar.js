import React from 'react';
import { connect } from 'react-redux';

import sideBarConstants from '../constants/sideBarConstants';
import * as userInterfaceActionCreators from '../actionCreators/userInterfaceActionCreators';

import PostingDetail from './postingDetail';
import Search from './search';
require("../../css/sidebar.scss");

@connect(state => {
  return (
    { sidebarView: state.userInterface.sidebarView }
  )
})

export default class Sidebar extends React.Component {
  handleViewChange(componentName) {
    this.props.dispatch(userInterfaceActionCreators['show' + componentName]())
  }

  displaySidebarNavOptions(componentName) {
    let style = {};
    if (componentName.toLowerCase() === this.props.sidebarView) {
      style = { 'backgroundColor': "#40474E" }
    }
    return (
      <div className="sidebar-nav-option"
           key={componentName}
           style={style}
           onClick={::this.handleViewChange.bind(this, componentName)}>{componentName}</div>
    )
  }

  render () {
    let { sidebarView } = this.props;
    let showComponent;
    if (sidebarView === 'details') {
      showComponent = <PostingDetail />
    } else {
      showComponent = <Search />
    }
    let hello = sideBarConstants['POSSIBLE_VIEWS'];
    return (
      <div id='sidebar'>
        <div id='sidebar-nav'>
          { sideBarConstants['POSSIBLE_VIEWS'].map(::this.displaySidebarNavOptions) }
        </div>
        { showComponent }
      </div>
    )
  }
}
