import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class Root extends Component {
  render () {
    return (
      <h1>Hello World from Webpack!</h1>
    )
  }
}

const component = <Root />;
ReactDOM.render(component, document.getElementById('app'));
