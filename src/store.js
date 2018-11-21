import { createStore, applyMiddleware } from 'redux'
import { cheeseReducer } from './reducers/cheese';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// export default createStore(
// 	cheeseReducer,
//  composeWithDevTools(
// 		applyMiddleware(thunk),
// 	)
// );

export default createStore(
	cheeseReducer,
	applyMiddleware(thunk)
);