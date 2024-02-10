import { combineReducers } from 'redux';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './Auth/authSlice';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
});
