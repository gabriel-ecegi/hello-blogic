import * as React from "react";
import { UpperBar } from "../../components/layout/UpperBar";

export type StateProps = { price: number };

const Layout: React.FunctionComponent<StateProps> = props => {
	return (
		<>
			<UpperBar price={props.price} />
			{props.children}
		</>
	);
};

export { Layout as LayoutComponent };
