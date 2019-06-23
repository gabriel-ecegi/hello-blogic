import React from "react";
import { ProductDetail } from "./features/ProductDetail/Container";
import { Layout } from "./features/Layout/Container";
import { store } from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => {
	return (
		<>
			<Provider store={store}>
				<Layout>
					<ProductDetail />
				</Layout>
			</Provider>
		</>
	);
};

export default App;
