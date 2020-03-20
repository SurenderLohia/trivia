import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getData, setSelectedAnswer } from './triviaActions';

import TriviaComponent from './TriviaComponent';
import { getTriviaListWithOptions } from './triviaSelector';

class TriviaContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return <TriviaComponent props={this.props} />
  }

  onAnswerSelect() {
    console.log('onAnswerSelect: container');
  }
}

const mapStateToProps = state => {
  const { trivia } = state;
  const {
    triviaView,
    currentTriviaIndex,
    selectedOptions
  } = trivia;

  return {
    triviaList: getTriviaListWithOptions(state),
    currentTriviaIndex,
    triviaView,
    selectedOptions
  }
}



const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  setSelectedAnswer: option => {
    console.log('options', option)
    dispatch(setSelectedAnswer(option));
  }
})

// const mapDispatchToProps = dispatch => ({
//   sendMessage: messaga => {
//   dispatch(sendMessage(message));
//   dispatch(navigateTo({ routeName: 'messagesList' }));
//   },
//  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaContainer);