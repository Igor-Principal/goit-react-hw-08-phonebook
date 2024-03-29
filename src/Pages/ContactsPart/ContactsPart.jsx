import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import Phonebook from 'components/Phonebook/Phonebook';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'store/contacts/contactThunk';
import { contactsSelector } from 'store/contacts/contactsSelectors';
import css from './contactsPart.module.css';
import { setToken } from 'services/auth-service';
import { authSelector } from 'store/Auth/authSelector';

function ContactsPart() {
  const { contacts, error, isLoading } = useSelector(contactsSelector);
  const { token } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setToken(token);
    dispatch(getContactsThunk());
  }, [token, dispatch]);

  return (
    <div className="container">
      {isLoading && <Loader />}
      <div className={css.mainPart}>
        <div className={css.formPart}>
          <h1 className={css.title}>Phonebook</h1>
          <Phonebook />
        </div>
        <div className={css.contactsPart}>
          {!isLoading && contacts && contacts.length === 0 && (
            <h2 className={css.titleEmpty}>The contact list is empty...</h2>
          )}
          {contacts.length > 0 && (
            <>
              <h2 className={css.title}>Contacts</h2>
              <Filter />
              <Contacts />
            </>
          )}
        </div>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default ContactsPart;
