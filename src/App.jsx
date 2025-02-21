import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const filteredContacts = contacts.filter(({ name }) => {
    const lowercasedSearchQuery = searchQuery.toLowerCase();
    const lowercasedContactName = name.toLocaleLowerCase();
    return lowercasedContactName.includes(lowercasedSearchQuery);
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleNewContacts = (newContact) => {
    setContacts((prev) => {
      return [...prev, { ...newContact, id: nanoid() }];
    });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleNewContacts={handleNewContacts} />
      <SearchBox setSearchQuery={setSearchQuery} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      {filteredContacts.length === 0 && searchQuery !== "" && (
        <p>No contacts to display</p>
      )}
    </div>
  );
};

export default App;
