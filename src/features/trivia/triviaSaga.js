import { takeEvery, call, put, all } from 'redux-saga/effects';

import { 
  TRIVIA_DATA_REQUESTED, 
  TRIVIA_DATA_LOADED,
  TRIVIA_API_ERROR,
  UPDATE_TRIVIA_VIEW
} from './triviaActionTypes';

import { triviaViews } from './triviaConstants';

export default function* watcherSaga() {
  yield takeEvery(TRIVIA_DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const updateViewPayload = {
      triviaView: triviaViews.quiz
    }

    const payload = yield call(getTriviaData);
    
    yield all([
      put({type: TRIVIA_DATA_LOADED, payload }),
      put({type: UPDATE_TRIVIA_VIEW, payload: updateViewPayload  })
    ]);
    
  } catch(error) {
    yield put({type: TRIVIA_API_ERROR, payload: error})
  }
  
}

function getTriviaData() {
  const url = 'https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple';

  return fetch(url)
    .then(response => response.json())
}