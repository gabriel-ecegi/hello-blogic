import React from "react";
import "./App.css";

type State = {
	name: string;
};

class App extends React.Component<{}, State> {
	state = { name: "" };

	setName = (name: string) => {
		this.setState({ name });
	};

	render() {
		return (
			<div className="App">
				<input
					value={this.state.name}
					onChange={e => this.setName(e.target.value)}
				/>
				<p>Hodnota v inpute je {this.state.name}</p>
			</div>
		);
	}
}

export default App;
