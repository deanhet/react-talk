import React, { Component } from 'react';
import './App.css';

import Node from './Node';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Array.apply(null, {length: 300}).map(() =>
          <Node />
        )}
      </div>
    );
  }
}

export default App;
