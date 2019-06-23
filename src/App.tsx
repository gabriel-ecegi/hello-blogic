import React from "react";
import { ProductDetail } from "./features/ProductDetail";
import { Layout } from "./features/Layout";

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
