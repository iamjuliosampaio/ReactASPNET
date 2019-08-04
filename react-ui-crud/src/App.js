import React, { Component, Fragment } from 'react';
import AppHeader from './components/AppHeader';
import Home from './components/Home';
import AppFooter from './components/AppFooter';

class App extends Component {

  render() {
    return <Fragment>
      <AppHeader />
      <Home />
      <AppFooter />
    </Fragment>;
  }
}

export default App;
