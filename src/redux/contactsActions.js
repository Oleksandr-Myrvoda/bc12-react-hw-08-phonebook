import { createAction } from "@reduxjs/toolkit";

// not used wist createAsyncThunk
// const fetchContactRequest = createAction("contacts/fetchContactRequest");
// const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
// const fetchContactError = createAction("contacts/fetchContactError");

// const addContactRequest = createAction("contacts/addContactRequest");
// const addContactSuccess = createAction("contacts/addContactSuccess");
// const addContactError = createAction("contacts/addContactError");

// const deleteContactRequest = createAction("contacts/deleteContactRequest");
// const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
// const deleteContactError = createAction("contacts/deleteContactError");

const filterContact = createAction("contacts/filterContacts");

export {
  // fetchContactRequest,
  // fetchContactSuccess,
  // fetchContactError,
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  // deleteContactSuccess,
  // deleteContactError,
  filterContact,
};
