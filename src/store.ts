import { createStore, combineReducers } from "redux";
import { ActionType, getType, createStandardAction } from "typesafe-actions";

type CartStateType = { price: number };

const initialCartState: CartStateType = { price: 200 };

const addAction = createStandardAction("@cart/ADD")<{ productPrice: number }>();

const resetAction = createStandardAction("@cart/RESET")();

type CartActionType = ActionType<typeof addAction | typeof resetAction>;

const cartReducer = (
	state: CartStateType = initialCartState,
	action: CartActionType
): CartStateType => {
	switch (action.type) {
		case getType(addAction):
			return { price: action.payload.productPrice + state.price, ...state };
		case getType(resetAction):
			return state;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	cart: cartReducer
});

export type RootStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export { store };
