import { Component, ErrorInfo, ReactNode } from 'react';
import './App.css';
import Routing from './components/routing/routing';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types/app-types';

class App extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
    console.log(errorInfo);
  }
  render(): ReactNode {
    return <Routing />;
  }
}

export default App;
