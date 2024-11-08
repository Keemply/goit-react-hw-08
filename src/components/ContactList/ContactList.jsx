import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.ulList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.liItem}>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
