import React, { Component } from 'react';
import PropTypes from 'prop-types';

// NOTE: error boundaries don't catch errors that happen on compilation
// (like undefined variables), errors that happen inside event handlers
// or asychronous errors (like setTimeout)
class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {
    hasError: false,
    error: '',
    info: ''
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true ,
      error: error,
      info: info
    });

    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render () {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
