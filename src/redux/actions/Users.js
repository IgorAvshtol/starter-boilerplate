import {
  DELETE_USER,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  SET_EDITABLE_USER
} from '../constants/Users';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const setEditableUser = (id) => ({
  type: SET_EDITABLE_USER,
  payload: id,
});
