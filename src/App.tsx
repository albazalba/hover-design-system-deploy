import "./App.css";
import { Dropdown } from "./stories/Dropdown";

function App() {
	let options = [
		{ value: "frenchy", label: "Frenchy" },
		{ value: "coco", label: "Coco" },
		{ value: "kitkat", label: "Kit-Kat" },
		{ value: "lei", label: "Lei" },
		{ value: "ankith", label: "Ankith" },
	];

	const onChange = (value: string) => {
		console.log(value);
	};

	return (
		<div className="app">
			<Dropdown
				defaultValue="frenchy"
				options={options}
				size={"small"}
				onChange={onChange}
			/>
		</div>
	);
}

export default App;
