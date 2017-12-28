import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import {initialTrackers} from 'actions/tracker';
import Home from 'components/Main';

require('./app.scss');

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(initialTrackers());

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
