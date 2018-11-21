import { createStore, applyMiddleware } from 'redux'
import { cheeseReducer } from './reducers/cheese';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// export default createStore(cheeseReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// 	applyMiddleware(thunk));

/*Error: It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function
*/

// export default createStore(
// 	cheeseReducer, composeWithDevTools(
// 		applyMiddleware(thunk),
// 	)
// );

export default createStore(
	cheeseReducer,
	applyMiddleware(thunk)
);