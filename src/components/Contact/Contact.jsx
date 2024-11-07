function Contact({ contact }) {
  return (
    <li key={contact.id}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button type="button">Delete</button>
    </li>
  );
}
export default Contact;
