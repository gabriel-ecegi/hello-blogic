import * as React from "react";

const Lowercase: React.FC<{ text: string }> = ({ text }) => (
	<>
		<h1>Lowecase</h1>
		<p>{text.toLowerCase()}</p>
	</>
);

export { Lowercase };
