import React from 'react';
import RenderedOutput from './RenderedOutput';
import Node from './Node';

export default class NodeTree extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tree: []
    };
    this.calculateTree = this.calculateTree.bind(this);
  }
  calculateTree(nodes){
    function traverseTree(nodes){
      console.log(nodes);
      if(nodes){
        return [<Node component={nodes}>{nodes.props ? traverseTree(nodes.props.children) : null}</Node>];
      }
    }
    return traverseTree(nodes);
  }
  render(){
    return(
      <div>
        {this.calculateTree(this.props.tree)}
      </div>
    )
  }
}
