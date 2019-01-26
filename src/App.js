import React, { Component } from 'react';
import Routers from './Route';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './components/navBar'

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <Routers />
      </Provider>
    );
  }
}

export default App;
