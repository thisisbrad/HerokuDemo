// Import the createReducer from helpers
import createReducer from '../helpers/createReducer';
// Import the action types
import {
  REQ_PRODS_PENDING,
  REQ_PRODS_SUCCESS,
  REQ_PRODS_ERROR,
  REQ_PROD_PENDING,
  REQ_PROD_SUCCESS,
  REQ_PROD_ERROR,
  ADD_PROD_PENDING,
  ADD_PROD_SUCCESS,
  ADD_PROD_ERROR,
  UPDATE_PROD_PENDING,
  UPDATE_PROD_SUCCESS,
  UPDATE_PROD_ERROR,
  DELETE_PROD_PENDING,
  DELETE_PROD_SUCCESS,
  DELETE_PROD_ERROR,
} from '../actionTypes';

// get the initial state
const initialState = {
  // Will hold each item with ids as keys
  byId: {},
  // An array of all the ids
  allIds: [],
  // Needed for cache state
  loadedAt: 0,
  // Tracking if the state is loading
  isLoading: false,
  // Any errors loading all the data
  error: null,
};

// Create functions for pending, success, and error
/* eslint-disable-next-line */
function prodsPending(state, action) {
  // Set the loading state and clear error
  return {
    ...state,
    isLoading: true,
    error: null,
  };
}

function prodsSuccess(state, action) {
  // Clear loading and error. Update the cache time and products
  return {
    ...state,
    isLoading: false,
    error: null,
    loadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce(
        (products, prod) => ({
          // Keep the current object
          ...products,
          // Add the product id as the key and item object for loading
          [prod.id]: {
            data: prod,
            isLoading: false,
            loadedAt: Date.now(),
            error: null,
          },
        }),
        {},
      ),
    },
    allIds: [...new Set([...state.allIds, ...action.data.map((prod) => prod.id)])],
  };
}

function prodsError(state, action) {
  // Clear the loading and set error
  return {
    ...state,
    isLoading: false,
    error: action.err,
  };
}

function prodPending(state, action) {
  // Set loading state and clear error
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        ...state.byId[action.payload.id],
        isLoading: true,
        error: null,
      },
    },
  };
}
function prodSuccess(state, action) {
  // Clear the loading error, update cache, add product
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        isLoading: false,
        error: null,
        loadedAt: Date.now(),
        data: action.data,
      },
    },
    allIds: [...new Set([...state.allIds, action.payload.id])],
  };
}
function prodError(state, action) {
  // clear loading and set error
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: {
        ...state.byId[action.payload.id],
        isLoading: false,
        error: action.err,
      },
    },
  };
}

// Export the create reducer with the initial state
// and the types with their actions.
export default createReducer(initialState, {
  [REQ_PRODS_PENDING]: prodsPending,
  [REQ_PRODS_SUCCESS]: prodsSuccess,
  [REQ_PRODS_ERROR]: prodsError,
  [ADD_PROD_PENDING]: prodPending,
  [ADD_PROD_SUCCESS]: prodSuccess,
  [ADD_PROD_ERROR]: prodError,
  [REQ_PROD_PENDING]: prodPending,
  [REQ_PROD_SUCCESS]: prodSuccess,
  [REQ_PROD_ERROR]: prodError,
  [UPDATE_PROD_PENDING]: prodPending,
  [UPDATE_PROD_SUCCESS]: prodSuccess,
  [UPDATE_PROD_ERROR]: prodError,
  [DELETE_PROD_PENDING]: prodPending,
  [DELETE_PROD_SUCCESS]: prodSuccess,
  [DELETE_PROD_ERROR]: prodError,
});
