import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function Trivia(props) {
  const [triviaList, setTriviaList] = useState([]);
  useEffect(() => {
    console.log('useEffect');
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
    axios.get(url)
      .then((response) => {
        setTriviaList(response.data.results);
      })

    //console.log('props', props);
  });

  return (
    <div className="flex-item">
      <h3 className="is-size-6 has-text-centered">Round 1/20</h3>
  <h1 className="is-size-1 has-text-centered mb1">0:07</h1>
      <div className="trivia-main-section mb2">
        <h2 className="is-size-3 question has-text-centered mb2">In which city, is the Big Nickel located in Canada?</h2>
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

Trivia.propTypes = {
  fetchTriviaData: PropTypes.func,
  triviaData: PropTypes.array,
  name: PropTypes.string
};

Trivia.defaultPropTypes = {
  triviaData: []
}

export default Trivia;