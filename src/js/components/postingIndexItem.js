import React from 'react';

export default class PostingIndexItem extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.company}</td>
        <td>{this.props.date_posted}</td>
      </tr>
    )
  }
}
