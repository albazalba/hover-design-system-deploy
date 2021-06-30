import './App.css';
import Button from './components/Button';
import Tooltip from './components/Tooltip';

function App() {
<<<<<<< HEAD
  return (
    <div className="app">
      {/* <Button label="Click me" accent="success" rounded /> */}
      <Tooltip isOpen={true} content="tooltip " direction="top">
        <h1>Hellohiiiiiiiiiiiiiiihgfdhfdhjdhjd</h1>
      </Tooltip>
    </div>
  );
=======
	return (
		<div className="app">
			<Button accent="success" label="submit" rounded="50px" />
		</div>
	);
>>>>>>> f2ae8f4b273b651effb548e4415e154a9573451d
}

export default App;