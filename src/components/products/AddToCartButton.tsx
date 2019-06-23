import * as React from "react";
import { Button, Icon } from "semantic-ui-react";

const AddToCartButton: React.FC = () => {
	return (
		<>
			<Button labelPosition="left" icon={true} color="blue" size="huge">
				<Icon name="cart plus" />
				Kúpiť za 300 EUR
			</Button>
			<p>* v košíku už máte 0 ks tohto produktu </p>
		</>
	);
};

export { AddToCartButton };
