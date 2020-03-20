import triviaInitialState from './triviaInitialState';

import { TRIVIA_DATA_LOADED } from './triviaActionTypes';

function triviaReducer(state = triviaInitialState, action) {
  switch (action.type) {
    case TRIVIA_DATA_LOADED:
      return Object.assign({}, state, {
        trivia: {
          ...state.trivia,
          triviaList: state.trivia.triviaList.concat(action.payload.results)
        }
      });
  
    default:
      return state;
  }
}

export default triviaReducer;
