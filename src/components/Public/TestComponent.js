import React, { Component } from 'react';

class TestComponent extends Component {
  // Uncomment to see error boundary message
  // componentWillMount() {
  //   throw new Error('I crashed!');
  // }

  render () {
    return (
      <div>
        <h1>This is a test</h1>
      </div>
    );
  }
}

export default TestComponent;
