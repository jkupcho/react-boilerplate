import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import configureStore from '../store';
import Message from 'Message';
import Base from 'Base';
import About from 'About';
import NotFound from 'NotFound';

const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

const routes =
  <Route path="/" component={Base}>
    <IndexRoute component={Message} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>;

function App() {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}

export default App;