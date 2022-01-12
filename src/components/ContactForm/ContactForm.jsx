import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, getAllContacts } from "../../redux";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const addNewContact = (newContact) => {
    const isContactNameDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const isContactNumberDuplicate = contacts.some(
      (contact) => contact.number === newContact.number
    );

    if (isContactNameDuplicate) {
      return alert(`${newContact.name} is already in contacts`);
    }
    if (isContactNumberDuplicate) {
      return alert(`${newContact.number} is already in contacts`);
    }

    dispatch(addContact(newContact));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContact({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.formLabel}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className={styles.formLabel}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
