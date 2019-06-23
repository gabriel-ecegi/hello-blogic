import * as React from "react";
import { Menu, Container } from "semantic-ui-react";
import { CartInfo } from "./CartInfo";

const UpperBar: React.FunctionComponent = _ => {
	return (
		<>
			<Menu fixed="top" inverted>
				<Container>
					<CartInfo />
				</Container>
			</Menu>
		</>
	);
};

export { UpperBar };
