// Import the functions needed from redux.
import { combineReducers, createStore, applyMiddleware } from 'redux';
// Import middleware to make actions async
import thunkMiddleware from 'redux-thunk';
// Import the logger to display the actions that are run
import { createLogger } from 'redux-logger';

// Middleware to help with API calls
import callAPI from './helpers/callAPIMiddleware';

// Get the reducers
import products from './products/reducer';

// Combine our multiple reducers into one
const mainReducer = combineReducers({
  // add in the reducer
  products,
});

// Set up the middleware and logger
const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());

// Create a redux store using the combined reducers and middleware functions
const store = createStore(mainReducer, middleware);

export default store;
