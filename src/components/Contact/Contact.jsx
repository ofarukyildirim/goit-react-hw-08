import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.set}>
      <div>
        <div className={css.flex}>
          <FaUser />
          <p>{contact.name}</p>
        </div>

        <div className={css.flex}>
          <FaPhone />
          <p>{contact.number}</p>
        </div>
      </div>

      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
