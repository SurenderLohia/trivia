import triviaInitialState from './triviaInitialState';

import { TRIVIA_DATA_LOADED, UPDATE_TRIVIA_VIEW } from './triviaActionTypes';

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
      console.log('comes here');
      return Object.assign({}, state, {
        trivia: {
          ...state.trivia,
          triviaView: action.payload.triviaView
        }
      });

    default:
      return state;
  }
}

export default triviaReducer;

