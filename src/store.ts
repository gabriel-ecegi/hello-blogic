import { createStore, combineReducers } from "redux";
import { ActionType, getType, createStandardAction } from "typesafe-actions";

type CartStateType = { price: number };

const initialCartState: CartStateType = { price: 0 };

export const addAction = createStandardAction("@cart/ADD")<{
	productPrice: number;
}>();

export const resetAction = createStandardAction("@cart/RESET")();

type CartActionType = ActionType<typeof addAction | typeof resetAction>;

const cartReducer = (
	state: CartStateType = initialCartState,
	action: CartActionType
): CartStateType => {
	switch (action.type) {
		case getType(addAction):
			console.log(action);
			return { ...state, price: action.payload.productPrice + state.price };
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
export type RootActionType = CartActionType; // | ActionType

const store = createStore(
	rootReducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
