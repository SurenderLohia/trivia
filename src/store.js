import { createStore, compose } from 'redux';

import triviaReducer from './features/trivia/triviaReducer';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  triviaReducer,
  storeEnhancers()
);

export default store;



