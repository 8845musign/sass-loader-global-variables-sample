import React, { PropTypes } from 'react';

import './List.scss';

export default class List extends React.Component {
  render() {
    return (
      <ul className="app-list list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    );
  }
}
