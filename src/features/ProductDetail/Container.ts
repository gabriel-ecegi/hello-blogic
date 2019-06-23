import { ProductDetailComponent, StateProps, DispatchProps } from "./Component";
import { connect } from "react-redux";
import { RootStateType, RootActionType, addAction } from "../../store";
import { Dispatch } from "redux";

const ProductDetailContainer = connect(
	(state: RootStateType): StateProps => ({ price: state.cart.price }),
	(dispatch: Dispatch<RootActionType>): DispatchProps => ({
		onAddToCart: price => dispatch(addAction({ productPrice: price }))
	})
)(ProductDetailComponent);

export { ProductDetailContainer as ProductDetail };
