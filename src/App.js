import React, { Component } from 'react';
import './App.css';
import RenderedOutput from './RenderedOutput';
import NodeTree from './NodeTree';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tree: null
    };
  }
  componentDidMount(){
    this.setState({
      tree: this.refs.output
    });
  }
  render() {
    return (
      <div className="App">
        <NodeTree tree={this.state.tree} ref="nodeTree" />
        <RenderedOutput ref="output">
          <div>
            <div>
              <span>hello</span>
            </div>
          </div>
        </RenderedOutput>
      </div>
    );
  }
}

export default App;
