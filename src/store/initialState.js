import { initialStateAuth } from './Auth/initialStateAuth';
import { initialStateContact } from './contacts/initialStateContacts';
import { initialStateFilter } from './filter/initilStateFilter';

export const initialStore = {
  contacts: initialStateContact,
  filter: initialStateFilter,
  auth: initialStateAuth,
};
