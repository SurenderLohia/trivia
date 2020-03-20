import React from 'react';

import './App.scss';
import 'bulma';

import TriviaContainer from './features/trivia/TriviaContainer';

function App() {
  return (
    <div className="App bg-gradient">
      <div className="container expand-height">
        <div className="section expand-height">
          <div className="columns is-centered expand-height">
            <div className="column is-8 flex-row is-center">
              <TriviaContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
