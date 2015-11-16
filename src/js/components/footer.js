import React from 'react';
require("../../css/footer.scss");

export default class Footer extends React.Component {

  render() {
    const github = "https://github.com/danielng09";
    const linkedin = "https:www.linkedin.com/in/danielng09";
    const email = "mailto:dvng13@gmail.com";

    return (
      <div id="footer-container">
        <div id="footer">
          <a href={github}><i className="fa fa-github-square icon" /></a>
          <a href={linkedin}><i className="fa fa-linkedin-square icon" /></a>
          <a href={email}><i className="fa fa-envelope icon" /></a>
        </div>
      </div>
    )
  }
}
