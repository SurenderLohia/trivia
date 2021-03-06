import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
  getData, 
  setSelectedAnswer,
  increamentCurrentTrivaIndex,
  decrementCurrentTriviaIndex,
  setTotalScore,
  updateTriviaView
} from './triviaActions';

import TriviaComponent from './TriviaComponent';
import { getTriviaListWithOptions } from './triviaSelector';

import { triviaViews } from './triviaConstants';

class TriviaContainer extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return <TriviaComponent {...this.props} />
  }

  onAnswerSelect() {
    console.log('onAnswerSelect: container');
  }
}

const getTotalScore = function(selectedOptions, triviaList) {
  let totalScore = 0;
  const QUESTION_WEIGHT = 5;

  for (const key in selectedOptions) {
    if (Object.prototype.hasOwnProperty.call(selectedOptions, key)) {
      const selectedOption = selectedOptions[key];
      if(selectedOption === triviaList[key].correct_answer) {
        totalScore += QUESTION_WEIGHT;
      }
    }
  }

  return totalScore;
};

const mapStateToProps = state => {
  const { trivia } = state;
  const {
    triviaView,
    currentTriviaIndex,
    selectedOptions,
    totalScore
  } = trivia;

  return {
    triviaList: getTriviaListWithOptions(state),
    currentTriviaIndex,
    triviaView,
    selectedOptions,
    totalScore
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  setSelectedAnswer: option => {
    dispatch(setSelectedAnswer(option));
  },
  gotoNextQuestion: () => dispatch(increamentCurrentTrivaIndex()),
  gotoPreviousQuestion: () => dispatch(decrementCurrentTriviaIndex()),
  setTotalScore: (selectedOptions, triviaList) => {
    const totalScore = getTotalScore(selectedOptions, triviaList);
    dispatch(setTotalScore({totalScore}));
    dispatch(updateTriviaView({triviaView: triviaViews.result}));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaContainer);