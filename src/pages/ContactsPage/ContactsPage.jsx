import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./ContactsPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.page}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm />

      <SearchBox />

      {isLoading && !error && (
        <b className={css.message}>Request in progress...</b>
      )}

      {error && <b className={css.message}>{error}</b>}

      {contacts.length === 0 ? (
        <p className={css.message}>No contacts yet.</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
}
