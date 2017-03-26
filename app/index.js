import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import List from './components/List';
import Footer from './components/Footer'

render(
  <div className="container mt-4">
    <List />
    <Footer />
  </div>,
  document.getElementById('app')
);
