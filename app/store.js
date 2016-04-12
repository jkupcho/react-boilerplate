import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

export default function configureStore(initialState = {}, history) {
  // let finalCreateStore;
  // if (process.env.NODE_ENV !== 'production') {
  //   const { persistState } = require('redux-devtools');
  //   finalCreateStore = compose(
  //     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  //   );
  // } else {
  //   finalCreateStore = applyMiddleware()(createStore);
  // }

  const reducer = combineReducers(require('./reducers'));
  const store = createStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = combineReducers(require('./reducers'));
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}