import css from "./Contact.module.css";
function Contact({ contact, deleteContact }) {
  return (
    <>
      <div className={css.infoCont}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        type="button"
        className={css.deleteButton}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
}
export default Contact;
