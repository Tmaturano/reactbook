/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';

import '../styles/app.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
