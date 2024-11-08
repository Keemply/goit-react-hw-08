import { useEffect, useState } from "react";
import "./App.css";
import initialContact from "../contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
const localStorageKey = "save-contacts";
function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(localStorageKey);
    if (savedContacts === null) {
      return initialContact;
    }
    return JSON.parse(savedContacts);
  });
  const [filter, setFilter] = useState("");
  function addContact(contactObj) {
    setContacts((prefContacts) => {
      return [...prefContacts, contactObj];
    });
  }
  console.log(contacts);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);
  function deleteContact(contactId) {
    setContacts((prefContacts) => {
      return prefContacts.filter((cont) => cont.id !== contactId);
    });
  }
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addItem={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
