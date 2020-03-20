import React from 'react';
import { triviaViews } from './triviaConstants';

import Timer from 'react-compound-timer'

function TriviaComponent({ props }) {
  const {
    triviaView,
    totalScore
  } = props;

  const {
    loader,
    quiz,
    result
  } = triviaViews;

  return (
    <div className="flex-item">
      {triviaView === loader && <Loader />}
      {triviaView === quiz && <Quiz props={props} />}
      {triviaView === result && <QuizResult totalScore={totalScore} />}
    </div>

  )
}

function Quiz({ props }) {
  const {
    triviaList,
    currentTriviaIndex,
    setSelectedAnswer,
    selectedOptions,
    gotoNextQuestion,
    gotoPreviousQuestion,
    setTotalScore
  } = props;

  const currentTrivia = triviaList.length && triviaList[currentTriviaIndex]

  return (
    <div className="flex-item">
      <h3 className="is-size-6 has-text-centered">Round {currentTriviaIndex + 1}/ {triviaList.length}</h3>
      <h1 className="is-size-1 has-text-centered mb1">
        <Timer>
          <Timer.Minutes />:
	        <Timer.Seconds />
        </Timer>
      </h1>
      
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
        <div className="columns">
          <div className="column has-text-right">
            <button className="button is-secondory" disabled={currentTriviaIndex === 0} onClick={gotoPreviousQuestion}>Previous</button>
            <button className="button is-primary ml1" disabled={currentTriviaIndex === (triviaList.length - 1)} onClick={gotoNextQuestion}>Next</button>
            <button className="button is-primary ml1" onClick={() => setTotalScore(selectedOptions, triviaList)}>Submit</button>
          </div>
        </div>
        <h6 className="is-size-5 has-text-centered">Select correct answer. One entry per round</h6>
      </div>
    </div>
  )
}

function Loader() {
  return (
    <div className="has-text-centered">Loading...</div>
  )
}

function QuizResult(props) {
  return (
    <div className="result" v-if="currentView === 'result'">
      <h2 className="is-size-3 has-text-centered">Congratulation! You successfully completed this trivia </h2>
      <h1 className="is-size-1 has-text-centered">Total score: {props.totalScore} </h1>
    </div>
  )
}

export default TriviaComponent;