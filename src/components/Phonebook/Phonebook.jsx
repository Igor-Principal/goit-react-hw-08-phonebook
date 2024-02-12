import { useState } from 'react';
import css from './phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { createContactsThunk } from 'store/contacts/contactThunk';
import toast from 'react-hot-toast';
import { contactsSelector } from 'store/contacts/contactsSelectors';

const Phonebook = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector(contactsSelector);

  const [info, setInfo] = useState({ name: '', number: '' });
  const { name, number } = info;

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const getInfo = e => {
    e.preventDefault();
    const includeName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    );
    if (includeName) {
     return toast.error(`${name} is already in contacts`);
    } else {
      dispatch(createContactsThunk({ name: name.trim(), number: number }));
    }
    setInfo({
      name: '',
      number: '',
    });
    toast.success('Created a new contact');
  };

  return (
    <form className={css.form} onSubmit={getInfo}>
      <label className={css.titleSmall} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        type="text"
        id="name"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <label className={css.titleSmall} htmlFor="number">
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        id="number"
        required
        value={number}
        onChange={handleChange}
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Phonebook;
