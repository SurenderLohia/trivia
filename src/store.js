import { createStore, applyMiddleware, compose } from 'redux';
import  createSagaMiddleware from "redux-saga";

import triviaReducer from './features/trivia/triviaReducer';
import triviaSaga from './features/trivia/triviaSaga';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  triviaReducer,
  storeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(triviaSaga);

export default store;






