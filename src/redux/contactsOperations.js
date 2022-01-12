import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//==== https://redux-toolkit.js.org/api/createAsyncThunk  ================

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const fetchContacts = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

const addContacts = async (contact) => {
  const { data } = await axios.post("/contacts", contact);
  return data;
};

const deleteContact = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
// ======================
const fetchContactsList = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, { rejectWithValue }) => {
    const contact = {
      name,
      number,
    };
    try {
      const contacts = await addContacts(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContactAction = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { addContact, deleteContactAction, fetchContactsList };

// =========================================
// import {
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
// } from "./contactsActions";

// const fetchContact = () => async (dispatch) => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get("/contacts");
//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };

// const addContact = (user) => async (dispatch) => {
//   dispatch(addContactRequest());

//   try {
//     const { data } = await axios.post("/contacts", user);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// const deleteContactAction = (id) => async (dispatch) => {
//   dispatch(deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${id}`);

//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };

// export { addContact, deleteContactAction, fetchContact };
// export default { addContact, deleteContact, fetchContact };
