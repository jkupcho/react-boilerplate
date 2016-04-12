import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store';
import Message from 'Message';

const initialState = {};
const store = configureStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <Message />
    </Provider>
  );
}

export default App;