import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/app-types';
import Routing from '../routing/routing';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }
  static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo) {
    return {
      hasError: true,
      error: Error,
      errorInfo,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState((prevState) => ({
      ...prevState,
      hasError: true,
    }));
  }
  render(): ReactNode {
    return this.state.hasError ? (
      <div>Error in Boundary</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
