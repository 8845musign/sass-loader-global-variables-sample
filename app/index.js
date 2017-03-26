import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import List from './components/List';

render(
  <div className="container mt-4">
    <List />
  </div>,
  document.getElementById('app')
);
