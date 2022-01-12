import { createReducer, combineReducers } from "@reduxjs/toolkit";

// ============== createReducer BUILDER + createAsyncThunk ===================
// https://redux-toolkit.js.org/api/createAsyncThunk
import {
  addContact,
  deleteContactAction,
  fetchContactsList,
} from "./contactsOperations";

import { filterContact } from "./contactsActions";

const items = createReducer([], (builder) => {
  builder
    .addCase(fetchContactsList.fulfilled, (_, { payload }) => payload)
    .addCase(addContact.fulfilled, (state, { payload }) => [...state, payload])
    .addCase(deleteContactAction.fulfilled, (state, { payload }) =>
      state.filter((contact) => contact.id !== payload)
    );
});

const filter = createReducer("", (builder) => {
  builder.addCase(filterContact, (_, { payload }) => payload);
});

const loading = createReducer(false, (builder) => {
  builder
    .addCase(fetchContactsList.pending, () => true)
    .addCase(fetchContactsList.fulfilled, () => false)
    .addCase(fetchContactsList.rejected, () => false)
    .addCase(addContact.pending, () => true)
    .addCase(addContact.fulfilled, () => false)
    .addCase(addContact.rejected, () => false)
    .addCase(deleteContactAction.pending, () => true)
    .addCase(deleteContactAction.fulfilled, () => false)
    .addCase(deleteContactAction.rejected, () => false);
});

const error = createReducer(null, (builder) => {
  builder
    .addCase(fetchContactsList.pending, () => null)
    .addCase(fetchContactsList.rejected, (_, { payload }) => payload)
    .addCase(addContact.pending, () => null)
    .addCase(addContact.rejected, (_, { payload }) => payload)
    .addCase(deleteContactAction.pending, () => null)
    .addCase(deleteContactAction.rejected, (_, { payload }) => payload);
});

const contactsReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default contactsReducer;

// ================== createReducer ============================================

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
//   filterContact,
// } from "./contactsActions";

// const items = createReducer([], {
//   [fetchContactSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

// const filter = createReducer("", {
//   [filterContact]: (_, { payload }) => payload,
// });

// const loading = createReducer(false, {
//   [fetchContactRequest]: () => true,
//   [fetchContactSuccess]: () => false,
//   [fetchContactError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContactRequest]: () => null,
//   [fetchContactError]: (_, { payload }) => payload,
//   [addContactRequest]: () => null,
//   [addContactError]: (_, { payload }) => payload,
//   [deleteContactRequest]: () => null,
//   [deleteContactError]: (_, { payload }) => payload,
// });

// const contactsReducer = combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });
// export default contactsReducer;
