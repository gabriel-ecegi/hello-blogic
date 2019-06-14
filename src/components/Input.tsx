import React from "react";

type Props = {
	name: string;
	changeName: (value: string) => void;
};

const Input: React.FC<Props> = props => {
	return (
		<input
			value={props.name}
			onChange={e => props.changeName(e.target.value)}
		/>
	);
};

export { Input };
