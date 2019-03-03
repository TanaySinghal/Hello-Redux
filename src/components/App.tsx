import React, { Component } from 'react';
import HelloList from '../containers/helloList';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers';

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h3>My Hello List:</h3>
          <HelloList />
        </div>
      </Provider>
    );
  }
}
