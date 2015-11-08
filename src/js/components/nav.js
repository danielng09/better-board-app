import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav navbar-inverse">
        <a className="navbar-brand" href="/"><i className="fa fa-thumb-tack" />&nbsp;&nbsp;Better Board</a>
      </nav>
    )
  }
}
