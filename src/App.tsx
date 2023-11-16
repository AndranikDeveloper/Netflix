import './App.css';
import ErrorBoundary from './components/boundary/boundary';
import Routing from './components/routing/routing';

function App() {
  return (
    <ErrorBoundary>
      <Routing />
    </ErrorBoundary>
  );
}
export default App;
