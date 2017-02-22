import React from 'react';

export default class Node extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: Math.floor(Math.random() * (10 - 0)),
      operator: Math.random() < 0.5 ? 'minus' : 'plus',
      xpos: Math.floor(Math.random() * (window.innerWidth - 0)),
      ypos: Math.floor(Math.random() * (window.innerHeight - 0))
    }
  }
  componentDidMount(){
    this.count = setInterval(this.count.bind(this), 1000);
    this.transition = setInterval(this.transition.bind(this), 10);
    this.direction = 'left';
  }
  transition(){
    if(this.direction === 'left'){
      if(this.state.xpos == 0){
        this.direction = 'right';
      } else {
        this.setState({ xpos: this.state.xpos -= 1 });
      }
    } else {
      // right
      if(this.state.xpos == window.innerWidth - 50){
        this.direction = 'left';
      } else {
        this.setState({ xpos: this.state.xpos += 1 });
      }
    }

  }
  count(){
    if(this.state.counter === 10){
      this.setState({ operator: 'minus'});
    } else if(this.state.counter === 0){
      this.setState({ operator: 'plus'});
    }

    if(this.state.operator === 'plus'){
      this.setState({
        counter: this.state.counter += 1
      });
    } else {
      this.setState({
        counter: this.state.counter -= 1
      });
    }
  }
  render(){
    return(
      <div ref="node" style={{ position: 'absolute', top: this.state.ypos, left: this.state.xpos, background: 'blue', borderRadius: '40px', width: '50px', height: '50px', color: 'white', lineHeight: '1'}}>
        <div style={{ lineHeight: '3em' }}>{this.state.counter}</div>
      </div>
    )
  }
}
