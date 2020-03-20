import { triviaViews } from './triviaConstants';

const TriviaInitialState = {
  trivia: {
    triviaList: [],
    isLoading: true,
    currentTriviaIndex: 0,
    currentTrivia: {},
    selectedOptions: {},
    totalScore: 0,
    triviaView: triviaViews.loader,
    selectedOption: '',
    countFrom: new Date(),
    totalSeconds: 0
  }
}

export default TriviaInitialState;