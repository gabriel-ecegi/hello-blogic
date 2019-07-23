import * as React from "react";
import { Button, Icon } from "semantic-ui-react";

type Props = { price: number; onAddToCart: (price: number) => void };

const AddToCartButton: React.FC<Props> = props => {
	return (
		<>
			<Button
				labelPosition="left"
				icon={true}
				color="blue"
				size="huge"
				onClick={() => props.onAddToCart(300)}
			>
				<Icon name="cart plus" />
				Kúpiť za 300 EUR
			</Button>
			<p>
				* v košíku už máte {Math.round(props.price / 300)} ks tohto produktu{" "}
			</p>
		</>
	);
};

export { AddToCartButton };
