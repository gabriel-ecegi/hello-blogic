import * as React from "react";
import { Dropdown } from "semantic-ui-react";

type Props = { price: number };

const CartInfo: React.FunctionComponent<Props> = props => {
	return (
		<>
			<Dropdown item simple text={`Košík ${props.price} EUR`}>
				<Dropdown.Menu>
					<Dropdown.Item>Položka</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};

export { CartInfo };
