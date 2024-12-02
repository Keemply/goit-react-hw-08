import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.search);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
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
