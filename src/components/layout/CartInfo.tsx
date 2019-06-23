import * as React from "react";
import { Dropdown } from "semantic-ui-react";

const CartInfo: React.FunctionComponent = _ => {
	return (
		<>
			<Dropdown item simple text="Košík 0 EUR">
				<Dropdown.Menu>
					<Dropdown.Item>Položka</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};

export { CartInfo };
