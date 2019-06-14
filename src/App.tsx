import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";

const App: React.FC = () => {
	const [name, setName] = useState("");
	return (
		<div className="App">
			<p>Hodnota v inpute je {name}</p>
			<Input name={name} changeName={e => setName(e)} />
		</div>
	);
};

export default App;
