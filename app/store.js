import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux'

function createReducer() {
  return combineReducers({
    ...require('./reducers'),
    routing: routerReducer
  });
}

export default function configureStore(initialState = {}, history) {
  const reducer = createReducer();
  const store = createStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = createReducer();
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}