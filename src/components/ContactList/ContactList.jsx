import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.ulList}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.liItem}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
