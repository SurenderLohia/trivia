import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getData } from './triviaActions';

import TriviaComponent from './TriviaComponent';
import { getTriviaListWithOptions } from './triviaSelector';

const mapStateToProps = state => {
  const { trivia } = state;
  const {
    triviaView,
    currentTriviaIndex
  } = trivia;

  return {
    triviaList: getTriviaListWithOptions(state),
    currentTriviaIndex,
    triviaView
  }
}

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
}

export default connect(
  mapStateToProps,
  { getData }
)(TriviaContainer);