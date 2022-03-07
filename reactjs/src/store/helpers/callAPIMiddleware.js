export default function callAPIMiddleware({ dispatch, getState }) {
  /* eslint-disable-next-line */
  return next => async action => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      // Used to pass remaining props from dispatch action
      // along payload
      ...props
    } = action;
      // If we don't have the types prop we're not supposed to intercept
      // it with this middleware. Move it along
    if (!types) {
      next(action);
      return;
    }

    if (
      !Array.isArray(types) || types.length !== 3 || !types.every((type) => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    // If we shouldn't call the API, return
    if (!shouldCallAPI(getState())) {
      return;
    }

    // Break out types in order by request, seuccess, and failure
    const [requestType, successType, failureType] = types;
    // Dispatch the request action ('REQ_ITEM')
    dispatch({
      ...props,
      type: requestType,
    });
    try {
      const resp = await callAPI();
      // success, dispatch 'REQ_ITEM_SUCCESS'
      dispatch({
        ...props,
        type: successType,
        data: resp.data,
      });
    } catch (err) {
      // An error ocurred. Dispatch 'REQ_ITEM_ERROR'
      dispatch({
        ...props,
        type: failureType,
        err,
      });
    }
  };
}
