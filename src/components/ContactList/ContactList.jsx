import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            handleDelete={() => handleDelete(id)}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
