// Function that takes the initial state and different handlers
function createReducer(initialState, handlers) {
  // Returns the reducer function that is called for each dispatch
  // with state and action
  /* eslint-disable-next-line */
  return function reducer(state = initialState, action) {
    // if the handlers define this action type
    if (handlers[action.type]) {
      // Return the state of the function linked to that handler
      return handlers[action.type](state, action);
    }
    return state;
  };
}
export default createReducer;
