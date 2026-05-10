import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.set}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
