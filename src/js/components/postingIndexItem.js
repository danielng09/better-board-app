import React from 'react';

export default class PostingIndexItem extends React.Component {
  render () {
    let link = 'http://res.cloudinary.com/ds6oys8ca/image/upload/v1446920073/Indeed-Logo-image_vgzkpl.png'
    return (
      <div className="job-postings-item">
        <p className="activity">{'Posted '  + this.props.activity + ' ago'}</p>
        <p className='title'>{this.props.title}</p>
        <span className='company'>{this.props.company}</span>
        <span className="location">{this.props.location}</span>
        <img className="source-image" src={link} />
      </div>
    )
  }
}
