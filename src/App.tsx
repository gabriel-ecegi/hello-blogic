import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
	const [name, setName] = useState("");
	return (
		<div className="App">
			<input value={name} onChange={e => setName(e.target.value)} />
			<p>Hodnota v inpute je {name}</p>
		</div>
	);
};

export default App;
