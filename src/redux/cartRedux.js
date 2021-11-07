import Axios from 'axios';
/* selectors */
export const getCartProduct = ({ cart }, productId) =>
  cart.data.filter(product => product.id === productId);

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const ADD_POST = createActionName('ADD_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addPost = payload => ({ payload, type: ADD_POST });

/* thunk creators */
export const fetchCartProducts = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    const state = getState();

    if (state.cart.data && state.cart.loading.active) {
      Axios.get('http://localhost:8000/api/cart')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const addProductToCartRequest = data => {
  return async (dispatch, getState) => {
    dispatch(startRequest({ name: ADD_POST }));

    try {
      let res = await Axios.post('http://localhost:8000/api/cart', data);

      dispatch(addPost(res.data.cartProduct));
      dispatch(endRequest({ name: ADD_POST }));
    } catch (e) {
      dispatch(errorRequest({ name: ADD_POST, error: e.message }));
    }
  };
};

export const updateProductInCart = data => {
  return async (dispatch, getState) => {
    dispatch(startRequest({ name: ADD_POST }));

    try {
      let res = await Axios.put('http://localhost:8000/api/cart', data);

      dispatch(endRequest({ name: ADD_POST }));
    } catch (e) {
      dispatch(errorRequest({ name: ADD_POST, error: e.message }));
    }
  };
};

export const deleteProductFromCart = data => {
  return async (dispatch, getState) => {
    dispatch(startRequest({ name: ADD_POST }));

    try {
      let res = await Axios({
        url: 'http://localhost:8000/api/cart',
        method: 'delete',
        data: { _id: data._id },
      });

      fetchCartProducts()(dispatch, getState);
      dispatch(endRequest({ name: ADD_POST }));
    } catch (e) {
      dispatch(errorRequest({ name: ADD_POST, error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case END_REQUEST: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: { pending: false, error: null, success: true },
        },
      };
    }
    case ERROR_REQUEST: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            pending: false,
            error: action.payload.message,
            success: false,
          },
        },
      };
    }
    case ADD_POST: {
      return { ...statePart, data: [...statePart.data, action.payload] };
    }
    default:
      return statePart;
  }
};
