import React from 'react';
import { connect } from 'react-redux';
import * as authActionCreators from '../actionCreators/authActionCreators';

@connect(state => {
  return {};
})

export default class Nav extends React.Component {
  handleSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( () => {
      this.props.dispatch(authActionCreators.logout());
      document.getElementById('g-signin2').style.display = 'block';
    }.bind(this));
  }

  render() {
    return (
      <nav className="nav navbar-inverse">
        <a className="navbar-brand" href="/"><i className="fa fa-thumb-tack" />&nbsp;&nbsp;Better Board</a>
        <a href="#" id='signout' onClick={::this.handleSignOut}>Sign Out</a>
      </nav>
    )
  }
}
