import { TRIVIA_DATA_REQUESTED } from './triviaActionTypes';

function getData() {
  return {type: TRIVIA_DATA_REQUESTED}
}

export { getData }