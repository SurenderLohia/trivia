import { takeEvery, call, put } from 'redux-saga/effects';

import { TRIVIA_DATA_REQUESTED, TRIVIA_DATA_LOADED, TRIVIA_API_ERROR } from './triviaActionTypes';

export default function* watcherSaga() {
  yield takeEvery(TRIVIA_DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getTriviaData);
    yield put({type: TRIVIA_DATA_LOADED, payload });
  } catch(error) {
    yield put({type: TRIVIA_API_ERROR, payload: error})
  }
  
}

function getTriviaData() {
  const url = 'https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple';

  return fetch(url)
    .then(response => response.json())
}