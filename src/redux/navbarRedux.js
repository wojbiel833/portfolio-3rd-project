// action name creator
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const LOG_IN = createActionName('LOG_IN');
export const LOG_OUT = createActionName('LOG_OUT');
export const LOGIN_ADMIN = createActionName('LOGIN_ADMIN');
export const LOGOUT_ADMIN = createActionName('LOGOUT_ADMIN');

// action creators
export const createActionLogIn = payload => ({
  payload,
  type: LOG_IN,
});

export const createActionLogOut = payload => ({
  payload,
  type: LOG_OUT,
});

export const createActionLogInAdmin = payload => ({
  payload,
  type: LOGIN_ADMIN,
});

export const createActionLogOutAdmin = payload => ({
  payload,
  type: LOGOUT_ADMIN,
});

// reducer
export function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...statePart,
        loggedIn: action.payload,
      };
    case LOG_OUT:
      return {
        ...statePart,
        loggedIn: action.payload,
      };
    case LOGIN_ADMIN:
      return {
        ...statePart,
        admin: action.payload,
      };
    case LOGOUT_ADMIN:
      return {
        ...statePart,
        admin: action.payload,
      };
    default:
      return statePart;
  }
}
