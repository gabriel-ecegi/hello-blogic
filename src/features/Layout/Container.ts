import { LayoutComponent, StateProps } from "./Component";
import { connect } from "react-redux";
import { RootStateType } from "../../store";

const LayoutContainer = connect(
	(state: RootStateType): StateProps => ({
		price: state.cart.price
	})
)(LayoutComponent);

export { LayoutContainer as Layout };
