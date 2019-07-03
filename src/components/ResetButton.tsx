import * as React from "react";

type Props = { onReset: () => void };

const ResetButton: React.FC<Props> = ({ onReset }) => (
	<button onClick={onReset}>Reset</button>
);

export { ResetButton };
