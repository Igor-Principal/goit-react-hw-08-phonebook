import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import Phonebook from 'components/Phonebook/Phonebook';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'store/contacts/contactThunk';
import { contactsSelector } from 'store/contacts/contactsSelectors';
import css from './mainPart.module.css';

function MainPart() {
  const { contacts, error, isLoading } = useSelector(contactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <Phonebook />
      {isLoading && <Loader />}
      {!isLoading && contacts && contacts.length === 0 && (
        <h2 className={css.titleEmpty}>The contact list is empty</h2>
      )}
      {contacts.length > 0 && (
        <>
          <h2 className={css.title}>Contacts</h2>
          <Filter />

          <Contacts />
        </>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default MainPart;
