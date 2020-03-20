import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getData } from './triviaActions';

class TriviaContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return null;
  }
}

export default connect(
  null,
  { getData }
)(TriviaContainer);