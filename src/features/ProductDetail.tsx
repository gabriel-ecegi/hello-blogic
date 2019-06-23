import * as React from "react";

import bunda from "../bunda.jpg";
import { Segment, Grid, Header, Image, Button, Icon } from "semantic-ui-react";

const ProductDetail: React.FC = () => {
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
						<Button labelPosition="left" icon={true} color="blue" size="huge">
							<Icon name="cart plus" />
							Kúpiť za 300 EUR
						</Button>
						<p>* v košíku už máte 0 ks tohto produktu </p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export { ProductDetail };
