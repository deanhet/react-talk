import React from 'react';

export default class Node extends React.Component{
  render(){
    return(
      <div style={{ border: '1px solid black', padding: 10, minHeight: 50, minWidth: 50 }}>
        <h4>{typeof this.props.component === 'object' ? this.props.component.type : this.props.component}</h4>
        {this.props.children}
      </div>
    );
  }
}
