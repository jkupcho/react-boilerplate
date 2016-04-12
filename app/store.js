import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';

function createReducer() {
  return combineReducers({
    ...require('./reducers/index'),
    routing: routerReducer
  });
}

export default function configureStore(initialState = {}, history) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(routerMiddleware(history))
  )(createStore);

  const store = createStoreWithMiddleware(createReducer(), initialState);

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      const nextReducer = createStoreWithMiddleware(createReducer(), initialState);
      store.replaceReducer(nextReducer);
    });
  }

  store.asyncReducers = {};
  return store;
}