import React from "react";
import { ProductDetail } from "./features/ProductDetail/Container";
import { Layout } from "./features/Layout/Container";

const App: React.FC = () => {
	return (
		<>
			<Layout>
				<ProductDetail />
			</Layout>
		</>
	);
};

export default App;
