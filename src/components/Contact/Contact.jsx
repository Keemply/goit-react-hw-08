import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <div className={css.infoCont}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" className={css.deleteButton} onClick={handleClick}>
        Delete
      </button>
    </>
  );
}
export default Contact;
