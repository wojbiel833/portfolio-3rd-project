import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as navbarRedux } from './navbarRedux';
import { reducer as productsReducer } from './productsRedux';
import { reducer as cartReducer } from './cartRedux';
import { reducer as ordersReducer } from './ordersRedux';

const initialState = {
  login: { loggedIn: true, email: 'example2@gmail.com', admin: false },
  cart: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  orders: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
// define reducers
const reducers = {
  login: navbarRedux,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
