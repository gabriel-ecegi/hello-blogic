import * as React from "react";
import { Menu, Container } from "semantic-ui-react";
import { CartInfo } from "./CartInfo";

type Props = { price: number };

const UpperBar: React.FunctionComponent<Props> = props => {
	return (
		<>
			<Menu fixed="top" inverted>
				<Container>
					<CartInfo price={props.price} />
				</Container>
			</Menu>
		</>
	);
};

export { UpperBar };
