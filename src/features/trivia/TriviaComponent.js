import React from 'react';
import { triviaViews } from './triviaConstants';

function TriviaComponent({props}) {
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
      { triviaView === loader && <Loader /> }
      { triviaView === quiz && <Quiz props={props} /> }
      { triviaView === result && <QuizResult /> }
    </div>
    
  )
}

function Quiz({props}) {
  const {
    triviaList,
    currentTriviaIndex
  } = props;

  const currentTrivia = triviaList.length && triviaList[currentTriviaIndex]
  
  console.log('triviaList', triviaList);
  return (
    <div className="flex-item">
      <h3 className="is-size-6 has-text-centered">Round {currentTriviaIndex + 1}/ {triviaList.length}</h3>
      <h1 className="is-size-1 has-text-centered mb1">0:07</h1>
      <div className="trivia-main-section mb2">
      <h2 className="is-size-3 question has-text-centered mb2">{currentTrivia.question}</h2>
        <div className="columns is-multiline is-variable is-7">
          <div className="column is-half">
            <div className="answer-item">
              <span>1. Victoria, British Columbia</span>
            </div>
          </div>
          <div className="column is-half">
            <div className="answer-item">
              <span>1. Victoria, British Columbia</span>
            </div>
          </div>
          <div className="column is-half">
            <div className="answer-item">
              <span>1. Victoria, British Columbia</span>
            </div>
          </div>
          <div className="column is-half">
            <div className="answer-item">
              <span>1. Victoria, British Columbia</span>
            </div>
          </div>
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