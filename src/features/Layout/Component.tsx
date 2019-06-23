import * as React from "react";
import { UpperBar } from "../../components/layout/UpperBar";

const Layout: React.FunctionComponent = props => {
	return (
		<>
			<UpperBar />
			{props.children}
		</>
	);
};

export { Layout as LayoutComponent };
