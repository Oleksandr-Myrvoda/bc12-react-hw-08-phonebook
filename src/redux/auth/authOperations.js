import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const getCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const persistedToken = thunkAPI.getState().auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export { register, logIn, logOut, getCurrentUser };
//=================================================================================

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

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

// const register = (credentials) => async (dispatch) => {
//   console.log(credentials);
//   dispatch(registerRequest());

//   try {
//     const response = await axios.post("users/signup", credentials);
//     token.set(response.data.token);
//     dispatch(registerSuccess(response.data));
//   } catch (error) {
//     dispatch(registerError(error.message));
//   }
// };

// const logIn = (credentials) => async (dispatch) => {
//   dispatch(loginRequest());

//   try {
//     const response = await axios.post("users/login", credentials);
//     token.set(response.data.token);
//     console.log(response.data.token);
//     dispatch(loginSuccess(response.data));
//   } catch (error) {
//     dispatch(loginError(error.message));
//   }
// };

// const logOut = () => async (dispatch) => {
//   dispatch(logoutRequest());

//   try {
//     await axios.post("/users/logout");
//     token.unset();
//     dispatch(logoutSuccess());
//   } catch (error) {
//     dispatch(logoutError(error.message));
//   }
// };

// const getCurrentUser = () => async (dispatch, getState) => {
//   const persistedToken = getState().auth.token;
//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(getCurrentUserRequest());
//   try {
//     const response = await axios.get("users/current");
//     dispatch(getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(getCurrentUserError(error.message));
//   }
// };

// export default { register, logIn, logOut, getCurrentUser };
