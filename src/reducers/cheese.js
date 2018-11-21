import {
	FETCH_CHEESES_REQUEST,
	FETCH_CHEESES_SUCCESS,
	FETCH_CHEESES_ERROR
} from "../actions/cheese";

const initialState = {
	cheeses: [],
	loading: false,
	error: null
}
/*
//reducer= function with 2 arguments
// first is state, second is action
export const reducer = (state = initialState, action) => {
	return state;
}
//returned state then updates the state in the app
*/
export const cheeseReducer = (state = initialState, action) => {

	if (action.type === FETCH_CHEESES_REQUEST) {
		return {
			loading: true,
			error: null
		}
	}
	if (action.type === FETCH_CHEESES_SUCCESS) {
		return {
			cheeses: action.cheeses,
			loading: false,
			error: null
		}
	}
	if (action.type === FETCH_CHEESES_ERROR) {
		return {
			loading: false,
			error: action.error
		}
	}
	return state;
};