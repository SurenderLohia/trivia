import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getData } from './triviaActions';

import TriviaComponent from './TriviaComponent';

const mapStateToProps = state => {
  return {
    triviaList: state.triviaList
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