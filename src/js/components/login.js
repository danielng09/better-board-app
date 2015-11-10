import React from 'react';
import { connect } from 'react-redux';
import * as authActionCreators from '../actionCreators/authActionCreators';

@connect(state => {
  return (
    { user: state.auth.user }
  )
})

export default class Login extends React.Component {
  componentDidMount() {
    gapi.signin2.render('g-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'theme': 'dark',
      'onsuccess': this.handleSignIn.bind(this)
    });
  }

  handleSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    this.refs.googleSignIn.style.display = "none";
    this.props.dispatch(authActionCreators.login(profile));
  }

  render() {
    let { user } = this.props;
    return (
      <div>
        <div ref="googleSignIn" id="g-signin2" />
      </div>
    )
  }
}
