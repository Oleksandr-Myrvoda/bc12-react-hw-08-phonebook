import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { register, logIn, logOut, getCurrentUser } from "./authOperations";

// const initialUserState = { name: null, email: null };
const initialUserState = {
  user: { name: null, email: null },
  token: null,
  logIn: false,
};

const user = createReducer(initialUserState, (builder) => {
  builder
    .addCase(register.fulfilled, (_, { payload }) => payload.user)
    .addCase(logIn.fulfilled, (_, { payload }) => payload.user)
    .addCase(logOut.fulfilled, () => initialUserState)
    .addCase(getCurrentUser.fulfilled, (_, { payload }) => payload);
});

const token = createReducer(null, (builder) => {
  builder
    .addCase(register.fulfilled, (_, { payload }) => payload.token)
    .addCase(logIn.fulfilled, (_, { payload }) => payload.token)
    .addCase(logOut.fulfilled, () => null);
});

const error = createReducer(null, (builder) => {
  builder
    .addCase(register.rejected, (_, { payload }) => payload)
    .addCase(logIn.rejected, (_, { payload }) => payload)
    .addCase(logOut.rejected, (_, { payload }) => payload)
    .addCase(getCurrentUser.rejected, (_, { payload }) => payload);
});

const isAuth = createReducer(false, (builder) => {
  builder
    .addCase(register.fulfilled, () => true)
    .addCase(logIn.fulfilled, () => true)
    .addCase(getCurrentUser.fulfilled, () => true)
    .addCase(register.rejected, () => false)
    .addCase(logIn.rejected, () => false)
    .addCase(getCurrentUser.rejected, () => false)
    .addCase(logOut.fulfilled, () => true);
});

const authReducer = combineReducers({
  user,
  token,
  error,
  isAuth,
});

export default authReducer;
// =======================================

// import {
//   registerRequest,
//   registerSuccess,
//   registerError,
//   loginRequest,
//   loginSuccess,
//   loginError,
//   logoutRequest,
//   logoutSuccess,
//   logoutError,
//   getCurrentUserRequest,
//   getCurrentUserSuccess,
//   getCurrentUserError,
// } from "./authActions";

// const initialUserState = { name: null, email: null };

// const user = createReducer(initialUserState, {
//   [registerSuccess]: (_, { payload }) => payload.user,
//   [loginSuccess]: (_, { payload }) => payload.user,
//   [logoutSuccess]: () => initialUserState,
//   [getCurrentUserSuccess]: (_, { payload }) => payload,
// });

// const token = createReducer(null, {
//   [registerSuccess]: (_, { payload }) => payload.token,
//   [loginSuccess]: (_, { payload }) => payload.token,
//   [logoutSuccess]: () => null,
// });

// const error = createReducer(null, {
//   [registerError]: (_, { payload }) => payload,
//   [loginError]: (_, { payload }) => payload,
//   [logoutError]: (_, { payload }) => payload,
//   [getCurrentUserError]: (_, { payload }) => payload,
// });

// const isAuth = createReducer(false, {
//   [registerSuccess]: () => true,
//   [loginSuccess]: () => true,
//   [getCurrentUserSuccess]: () => true,

//   [registerError]: () => false,
//   [loginError]: () => false,
//   [getCurrentUserError]: () => false,

//   [logoutSuccess]: () => false,
// });

// export default combineReducers({
//   user,
//   token,
//   error,
//   isAuth,
// });
