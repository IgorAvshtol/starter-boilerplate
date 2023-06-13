import {
  DELETE_USER,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS, SET_EDITABLE_USER,
} from '../constants/Users';

const initState = {
  users: [],
  editableUser: {},
  loading: false,
  error: null,
};

const users = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case SET_EDITABLE_USER:
      return {
        ...state,
        editableUser: state.users.filter(user => user.id === action.payload)[0]
      };
    default:
      return state;
  }
};

export default users;
