const TriviaInitialState = {
  trivia: {
    triviaList: [],
    isLoading: true,
    currentTriviaIndex: 0,
    currentTrivia: {},
    selectedOptions: {},
    totalScore: 0,
    currentView: 'loader', // Possible views or loader, quiz, result,
    selectedOption: '',
    countFrom: new Date(),
    totalSeconds: 0
  }
}

export default TriviaInitialState;