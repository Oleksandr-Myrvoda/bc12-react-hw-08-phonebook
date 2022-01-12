import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContactsList,
  deleteContactAction,
  getMemoizedFilteredContacts,
  getLoading,
} from "../../redux";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(getMemoizedFilteredContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteContactAction(id));
  };

  useEffect(() => dispatch(fetchContactsList()), [dispatch]);

  return (
    <>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={styles.item}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              className={styles.button}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {loading && "Loading..."}
    </>
  );
};

export default ContactList;
