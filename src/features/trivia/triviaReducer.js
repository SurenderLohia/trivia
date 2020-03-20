import triviaInitialState from './triviaInitialState';

import { 
  TRIVIA_DATA_LOADED, 
  UPDATE_TRIVIA_VIEW,
  SET_SELECTED_ANSWER,
  INCREMET_CURRENT_TRIVIA_INDEX,
  DECREMET_CURRENT_TRIVIA_INDEX
} from './triviaActionTypes';

function triviaReducer(state = triviaInitialState, action) {
  switch (action.type) {
    case TRIVIA_DATA_LOADED:
      return Object.assign({}, state, {
        trivia: {
          ...state.trivia,
          triviaList: state.trivia.triviaList.concat(action.payload.results)
        }
      });

    case UPDATE_TRIVIA_VIEW:
      return Object.assign({}, state, {
        trivia: {
          ...state.trivia,
          triviaView: action.payload.triviaView
        }
      });

    case SET_SELECTED_ANSWER:
      return Object.assign({}, state, {
        trivia: {
          ...state.trivia,
          selectedOptions: Object.assign({}, state.trivia.selectedOption, {
            [action.payload.key]: action.payload.value
          })
        }
      });

    case INCREMET_CURRENT_TRIVIA_INDEX:
      return Object.assign({}, state, {
        trivia: {
          ...state.trivia,
          currentTriviaIndex: state.trivia.currentTriviaIndex + 1
        }
      });

    case DECREMET_CURRENT_TRIVIA_INDEX:
      return Object.assign({}, state, {
        trivia: {
          ...state.trivia,
          currentTriviaIndex: state.trivia.currentTriviaIndex - 1
        }
      });

    default:
      return state;
  }
}

export default triviaReducer;

