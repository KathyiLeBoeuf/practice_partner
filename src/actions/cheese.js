import { applyMiddleware as dispatch } from "redux";

//sync
export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST,
})

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = () => ({
	type: FETCH_CHEESES_SUCCESS,
})
export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = () => ({
	type: FETCH_CHEESES_ERROR,
})

//async
export const fetchCheeses = () => {
	dispatch(fetchCheesesRequest());
	return fetch(`/api/cheeses`)
		.then(res => res.json())
		.then((res) => {
			console.log(res);
			dispatch(fetchCheesesSuccess(res));
		})
		.catch((err) => {
			dispatch(fetchCheesesError(err));
		})
}