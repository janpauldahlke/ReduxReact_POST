import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>entering App ...
        { this.props.children }
      </div>
    );
  }
}

/* TODO
  - apply nested route into App, by calling it with {this.props.children}

 */
