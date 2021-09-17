import './App.css';
import Button from './components/Button';
import Tooltip from './components/Tooltip';
import {DropDown} from './components/DropDown/MenuButton';
import {FiMoreVertical} from 'react-icons/fi'

function App() {
  return (
    <div className="app">
      {/* <Button label="Click me" accent="success" rounded /> */}
      <DropDown
					button={<FiMoreVertical />}
					buttonStyle={{border:"none", height:"45px", width:"45px", borderRadius:"50%", margin:"5px" }}
					list={[
						{ label: 'Frenchy', onSelect: () => console.log("hiii")},
						{ label: 'Coco', },
						{ label: 'Kit-Kat' },
						{ label: 'Lei' },
						{ label: 'Ankith' }
					]}
					/>
    </div>
  );
}

export default App;
