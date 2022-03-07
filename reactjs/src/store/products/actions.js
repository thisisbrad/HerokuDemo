import { v5 as uuidv5 } from 'uuid';
// Bring in the API
import API from '../../API';
// Import the actionTypes
import {
  REQ_PRODS_PENDING,
  REQ_PRODS_SUCCESS,
  REQ_PRODS_ERROR,
  ADD_PROD_PENDING,
  ADD_PROD_SUCCESS,
  ADD_PROD_ERROR,
  REQ_PROD_PENDING,
  REQ_PROD_SUCCESS,
  REQ_PROD_ERROR,
  UPDATE_PROD_PENDING,
  UPDATE_PROD_SUCCESS,
  UPDATE_PROD_ERROR,
  DELETE_PROD_PENDING,
  DELETE_PROD_SUCCESS,
  DELETE_PROD_ERROR,
} from '../actionTypes';

// Allow cache data for 5 minutes
const CACHE_TIME = 1000 * 60 * 5;

// export the GET all function
export const fetchProds = () => ({
  // Send in the three types for this action
  types: [REQ_PRODS_PENDING, REQ_PRODS_SUCCESS, REQ_PRODS_ERROR],
  // Send a function to call the API
  callAPI: () => API.get('/products'),
  // receives current state and returns true if we should call the API
  shouldCallAPI: (state) => {
    const { loadedAt, isLoading } = state.products;
    // If items are loading, don't call again
    if (isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    // If we don't have the item or it's beyond the cache
    // timeout, make the API call
    return !loadedAt || !isCached;
  },
});

// Export the POST a new product
export const createProd = (product) => {
  const id = uuidv5();
  return {
    types: [ADD_PROD_PENDING, ADD_PROD_SUCCESS, ADD_PROD_ERROR],
    callAPI: () => API.post('/products', { id, ...product }),
    payload: { id },
  };
};

// Export the GET one product
export const fetchProd = (id) => ({
  types: [REQ_PROD_PENDING, REQ_PROD_SUCCESS, REQ_PROD_ERROR],
  callAPI: () => API.get(`/product/${id}`),
  shouldCallAPI: (state) => {
    const product = state.products.byId[id] || {};
    const { loadedAt, isLoading } = product;
    if (!product || isLoading) return false;
    const isCached = Date.now() - loadedAt < CACHE_TIME;
    return !loadedAt || !isCached;
  },
  payload: { id },
});

// Export the PUT to update one product
export const updateProd = (prod) => ({
  types: [UPDATE_PROD_PENDING, UPDATE_PROD_SUCCESS, UPDATE_PROD_ERROR],
  callAPI: () => API.get(`/products/${prod.id}`, prod),
  payload: { id: prod.id },
});

// Export the DELETE
export const deleteProd = (prod) => ({
  types: [DELETE_PROD_PENDING, DELETE_PROD_SUCCESS, DELETE_PROD_ERROR],
  callAPI: () => API.delete(`/products/${prod.id}`),
});
