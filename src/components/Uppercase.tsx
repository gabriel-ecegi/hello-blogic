import * as React from "react";

const Uppercase: React.FC<{ text: string }> = ({ text }) => (
	<>
		<h1>Uppercase</h1>
		<p>{text.toUpperCase()}</p>
	</>
);

export { Uppercase };
