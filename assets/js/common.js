import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import Main from './container/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {allMethod} from './reducer/index';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
injectTapEventPlugin();

document.body.style.margin = 0;

const store = createStore(allMethod);
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
