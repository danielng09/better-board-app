import React from 'react';

export default class Footer extends React.Component {

  render() {
    const github = "https://github.com/danielng09";
    const linkedin = "https:www.linkedin.com/in/danielng09";
    const email = "mailto:dvng13@gmail.com";

    return (
      <div id="footer-container">
        <div id="footer">
          <i className="fa fa-github-square icon"><a href={github} /></i>
          <i className="fa fa-linkedin-square icon"><a href={linkedin} /></i>
          <i className="fa fa-envelope icon"><a href={email} /></i>
        </div>
      </div>
    )
  }
}
