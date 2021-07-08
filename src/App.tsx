import './App.css';
import Button from './components/Button';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="app">
      {/* <Button label="Click me" accent="success" rounded /> */}
      <Tooltip isOpen={true} content="tooltip " direction="top">
        <h1>Hellohiiiiiiiiiiiiiiihgfdhfdhjdhjd</h1>
      </Tooltip>
    </div>
  );
}

export default App;
