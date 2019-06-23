import * as React from "react";

import bunda from "../../bunda.jpg";
import { Segment, Grid, Header, Image } from "semantic-ui-react";
import { AddToCartButton } from "../../components/products/AddToCartButton";

export type StateProps = { price: number };

export type DispatchProps = { onAddToCart: (price: number) => void };

const ProductDetail: React.FC<StateProps & DispatchProps> = props => {
	return (
		<Segment style={{ padding: "8em 0em" }} vertical>
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as="h3" style={{ fontSize: "2em" }}>
							Bunda do hôr
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							Vyrobená z kvalitných materiálov prináša pôžitok všetkým
							milovníkom hôr
						</p>
					</Grid.Column>
					<Grid.Column floated="right" width={6}>
						<Image bordered rounded size="large" src={bunda} />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign="center">
						<AddToCartButton
							price={props.price}
							onAddToCart={props.onAddToCart}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export { ProductDetail as ProductDetailComponent };
