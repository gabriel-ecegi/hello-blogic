import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Lowercase } from "./components/Lowercase";
import { Uppercase } from "./components/Uppercase";
import { ResetButton } from "./components/ResetButton";

const App: React.FC = () => {
	const [name, setName] = useState("");
	return (
		<div className="App">
			<Input name={name} changeName={e => setName(e)} />
			<Uppercase text={name} />
			<Lowercase text={name} />
			<ResetButton onReset={() => setName("")} />
		</div>
	);
};

export default App;
