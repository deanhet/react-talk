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
    let types = [];
    function traverseTree(nodes){
      // Magic happens here
      console.log(nodes);
      if(nodes && nodes.props && nodes.props.children){
        types = types.concat([nodes.props.children.type])
        traverseTree(nodes.props.children);
      }
    }
    traverseTree(nodes);
    return types;
  }
  render(){
    return(
      <div>
        {this.calculateTree(this.props.tree).map((node) =>
          <Node />
        )}
      </div>
    )
  }
}
