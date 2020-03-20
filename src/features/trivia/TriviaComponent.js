import React from 'react';
import { triviaViews } from './triviaConstants';

function TriviaComponent({ props }) {
  const {
    triviaView
  } = props;

  const {
    loader,
    quiz,
    result
  } = triviaViews;

  return (
    <div>
      {triviaView === loader && <Loader />}
      {triviaView === quiz && <Quiz props={props} />}
      {triviaView === result && <QuizResult />}
    </div>

  )
}

function Quiz({ props }) {
  const {
    triviaList,
    currentTriviaIndex,
    setSelectedAnswer,
    selectedOptions
  } = props;

  const currentTrivia = triviaList.length && triviaList[currentTriviaIndex]

  return (
    <div className="flex-item">
      <h3 className="is-size-6 has-text-centered">Round {currentTriviaIndex + 1}/ {triviaList.length}</h3>
      <h1 className="is-size-1 has-text-centered mb1">0:07</h1>
      <div className="trivia-main-section mb2">
        <h2 className="is-size-3 question wrapword has-text-centered mb2">{currentTrivia.question}</h2>
        <div className="columns is-multiline is-variable is-7">
          {currentTrivia.options.map((item, index) => {
            return (
              <div key={index} className="column is-half" onClick={() => setSelectedAnswer({key: currentTriviaIndex, value: item})}>
                <div className={'answer-item ' + (selectedOptions[currentTriviaIndex] === item ? 'active' : '') }>
                <span>{item}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h6 className="is-size-5 has-text-centered">Select correct answer. One entry per round</h6>
      </div>
    </div>
  )
}

function Loader() {
  return (
    <div>Loading...</div>
  )
}

function QuizResult() {
  return (
    <div>Result...</div>
  )
}

export default TriviaComponent;