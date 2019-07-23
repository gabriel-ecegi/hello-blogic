import { createStore, combineReducers, applyMiddleware } from "redux";
import {
	ActionType,
	getType,
	createStandardAction,
	createAsyncAction
} from "typesafe-actions";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "@redux-saga/core/effects";

type CartStateType = { price: number };

const initialCartState: CartStateType = { price: 0 };

export const getDiscountAsync = createAsyncAction(
	"@cart/FETCH_DISCOUNT_REQUEST",
	"@cart/FETCH_DISCOUNT_SUCCESS",
	"@cart/FETCH_DISCOUNT_FAILURE"
)<number, { price: number; discount: number }, Error>();

function* fetchDiscount(
	action: ReturnType<typeof getDiscountAsync.request>
): Generator {
	try {
		const json = yield fetch(
			"https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8"
		).then(response => response.json());

		var discount: number = Math.round(json.data[0] / 10);
		console.log(discount);

		yield put(
			getDiscountAsync.success({ price: action.payload, discount: discount })
		);
	} catch (err) {
		yield put(getDiscountAsync.failure(err));
	}
}

export function* watchFetchNewPaymentTemplateRequiredAction() {
	yield takeEvery(getType(getDiscountAsync.request), fetchDiscount);
}

export const resetAction = createStandardAction("@cart/RESET")();

type CartActionType = ActionType<typeof resetAction | typeof getDiscountAsync>;

const cartReducer = (
	state: CartStateType = initialCartState,
	action: CartActionType
): CartStateType => {
	switch (action.type) {
		case getType(resetAction):
			return { ...state, price: 0 };
		case getType(getDiscountAsync.request):
			return state;
		case getType(getDiscountAsync.success):
			return {
				...state,
				price: state.price + (action.payload.price - action.payload.discount)
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	cart: cartReducer
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type RootActionType = CartActionType; // | ActionType

const sagaMiddleware = createSagaMiddleware();

const devToolsMiddleware =
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(watchFetchNewPaymentTemplateRequiredAction);

export { store };
