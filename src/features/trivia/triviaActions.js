import { 
  TRIVIA_DATA_REQUESTED, 
  UPDATE_TRIVIA_VIEW,
  SET_SELECTED_ANSWER,
  INCREMET_CURRENT_TRIVIA_INDEX,
  DECREMET_CURRENT_TRIVIA_INDEX
} from './triviaActionTypes';


function getData() {
  return {type: TRIVIA_DATA_REQUESTED}
}

function updateTriviaView(payload) {
  return {type: UPDATE_TRIVIA_VIEW, payload }
}

function setSelectedAnswer(payload = {}) {
  return {type: SET_SELECTED_ANSWER, payload}
}

function increamentCurrentTrivaIndex() {
  return {type: INCREMET_CURRENT_TRIVIA_INDEX}
}

function decrementCurrentTriviaIndex() {
  return {type: DECREMET_CURRENT_TRIVIA_INDEX}
}

export { 
  getData,
  updateTriviaView, 
  setSelectedAnswer,
  increamentCurrentTrivaIndex,
  decrementCurrentTriviaIndex
}