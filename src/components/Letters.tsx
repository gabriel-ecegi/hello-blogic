import * as React from "react";

const Letters: React.FC<{ text: string }> = ({ text }) => {
	return (
		<ol>
			{text.split("").map((e, i) => (
				<li key={`${e}-${i}`}>{e}</li>
			))}
		</ol>
	);
};

export { Letters };
