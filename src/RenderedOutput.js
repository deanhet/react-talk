import React from 'react';

export default class RenderedOutput extends React.Component{
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
