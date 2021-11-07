import Axios from 'axios';

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const ADD_POST = createActionName('ADD_POST');

/* action creators */
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addPost = payload => ({ payload, type: ADD_POST });

/* thunk creators */
export const sendFormData = data => {
  return async (dispatch, getState) => {
    dispatch(startRequest({ name: ADD_POST }));

    try {
      let res = await Axios.post('http://localhost:8000/api/orders', data);

      /* ZAPISYWANIE W localStorage */
      localStorage.setItem('cart', JSON.stringify(res.data.order));
      /* wydobycie informacji */

      const cartProducts = JSON.parse(localStorage.getItem('cart'));

      dispatch(addPost(res.data.order));
      dispatch(endRequest({ name: ADD_POST }));
    } catch (e) {
      console.log(e);
      dispatch(errorRequest({ name: ADD_POST, error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
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
