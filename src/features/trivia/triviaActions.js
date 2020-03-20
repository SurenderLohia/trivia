import { TRIVIA_DATA_REQUESTED, UPDATE_TRIVIA_VIEW } from './triviaActionTypes';


function getData() {
  return {type: TRIVIA_DATA_REQUESTED}
}

function updateTriviaView(payload) {
  return {type: UPDATE_TRIVIA_VIEW, payload }
}

export { getData, updateTriviaView }