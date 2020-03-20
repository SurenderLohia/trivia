import { createSelector } from 'reselect';

function getTriviaOptions(trivaItem) {
  const triviaOptions = trivaItem && [trivaItem.correct_answer, ...trivaItem.incorrect_answers];

  function shuffle(array = []) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
  
  return shuffle(triviaOptions);
}

const getTriviaList = state => state.trivia.triviaList;

const getTriviaListWithOptions = createSelector(
  getTriviaList,
  (triviaList) => {
    const triviaListWithOptions = triviaList.map((triviaItem) => {
      const options = getTriviaOptions(triviaItem);
  
      return {...triviaItem, options}
    });
  
    return triviaListWithOptions;
  }
)


export { getTriviaListWithOptions };