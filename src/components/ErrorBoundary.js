import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // try catch block for react
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  // checks if there is error if not renders children
  render() {
    if (this.state.hasError) {
      return <h1>Oops that is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
