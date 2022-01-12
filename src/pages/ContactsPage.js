import ContactsForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";

const ContactsPage = () => {
  return (
    <>
      <h2>Contacts</h2>

      <ContactsForm />

      <Filter />

      <ContactList />
    </>
  );
};
export default ContactsPage;
