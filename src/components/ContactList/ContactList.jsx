import Contact from "../Contact/Contact";
function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return <Contact contact={contact} />;
      })}
    </ul>
  );
}
export default ContactList;
