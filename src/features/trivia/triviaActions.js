import { 
  TRIVIA_DATA_REQUESTED, 
  UPDATE_TRIVIA_VIEW,
  SET_SELECTED_ANSWER
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

export { getData, updateTriviaView, setSelectedAnswer }